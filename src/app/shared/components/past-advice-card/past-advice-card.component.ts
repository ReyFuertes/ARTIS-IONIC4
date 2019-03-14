import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-advice-card',
  templateUrl: './past-advice-card.component.html',
  styleUrls: ['./past-advice-card.component.scss']
})

export class PastAdviceCardComponent implements OnInit {

  public PastAdvices: any[] = [
    {
      date: 'January 7, 2019 ',
      caption: 'Lay the foundation of success with your custom plan for this week.'
    },
    {
      date: 'January 1, 2019 ',
      caption: 'Lay the foundation of success with your custom plan for this week.'
    },
    {
      date: 'December 24, 2018 ',
      caption: 'Lay the foundation of success with your custom plan for this week.'
    },
    {
      date: 'December 17, 2018 ',
      caption: 'Lay the foundation of success with your custom plan for this week.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
