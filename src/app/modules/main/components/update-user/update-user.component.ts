import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sofka-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  @Output() dataSharing = new EventEmitter<string>();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  ngOnInit(): void {
    this.dataSharing.emit('Cel: 3204588796  Email: ingscorpion@gmail.com');
  }
}
