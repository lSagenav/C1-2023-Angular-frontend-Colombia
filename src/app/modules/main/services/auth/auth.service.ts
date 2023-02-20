import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { IUsers } from '../../interfaces/users.interface';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { UsersService } from '../users/users.service';
import { newUserModel } from '../../models/new-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private readonly user$: UsersService
  ) {}

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['UserComponent']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        this.router.navigate(['UserComponent']);
        console.log(result);
        // this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error);
      });
  }

  singWithEmail(email: string, password: string, user: IUsers) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
  SignUp(email: string, password: string, users: newUserModel) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.user$.createUser(users).subscribe({
          next: data => {
            console.log(data);
          },
          error: err => {
            console.log(err);
          },
        });
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('users');
      this.router.navigate(['']);
    });
  }
}
