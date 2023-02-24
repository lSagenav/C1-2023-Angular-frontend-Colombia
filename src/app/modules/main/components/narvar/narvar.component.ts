import { DataService } from './../../services/data/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-narvar',
  templateUrl: './narvar.component.html',
  styleUrls: ['./narvar.component.scss'],
})
export class NarvarComponent implements OnInit {
  @Input() name!: string;

  message = 'Scorpion design';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.nameEvent$.subscribe(Text => {
      this.message = Text;
      console.log('message:', Text);
    });
  }
}
