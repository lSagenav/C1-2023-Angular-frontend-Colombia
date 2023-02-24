import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'sofka-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  @Output() dataSharing = new EventEmitter<string>();

  message = 'Contact us by';
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataSharing.emit('Cel: 3204588796  Email: ingscorpion@gmail.com');
    this.dataService.nameEvent$.subscribe(text => {
      console.log('hijo: ', text);
      this.message = text;
    });
  }
}
