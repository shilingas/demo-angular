import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  data: number[] = [43, 12, 3, 4];
  status: boolean = false;

  triggerButtonClick() : void {
    this.status = true;
  }
}
