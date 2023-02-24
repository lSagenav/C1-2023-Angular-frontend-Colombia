import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'sofka-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private dataService: DataService) {}
  cambiarNombre() {
    this.dataService.nameEvent$.emit('the best designs by Scorpion');
  }
}
