import { Component, Input } from '@angular/core';

@Component({
  selector: 'sofka-narvar',
  templateUrl: './narvar.component.html',
  styleUrls: ['./narvar.component.scss'],
})
export class NarvarComponent {
  @Input() name: string | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
