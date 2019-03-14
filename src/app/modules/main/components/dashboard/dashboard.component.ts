import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Recommendation } from 'src/app/models/recommendation.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public recommendations: Recommendation[];

  constructor(private firebaseService: FirebaseService) {
    //this.firebaseService.importDataToFirestore();

    this.firebaseService.getrecommendations().subscribe(recomendations => this.recommendations = recomendations);
  }

  ngOnInit(): void { }
}
