import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  public value: number = 10;

  public changeLabelColor: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.value <= 40) {
      this.changeLabelColor = true;
    }
   }
}
