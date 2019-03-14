import { Component, OnInit, Input } from '@angular/core';
import { Recommendation } from 'src/app/models/recommendation.model';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  @Input()
  public iconPath: string = '/assets/images/sample-icon.png';
  
  @Input()
  public recommendation: Recommendation;

  constructor() { }

  ngOnInit(): void { }
}
