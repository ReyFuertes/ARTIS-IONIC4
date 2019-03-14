import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recommendation } from '../models/recommendation.model';
import { Observable } from 'rxjs';
import { UserInfo, SurveyAttribute } from '../models/survey.model';
import { School } from '../models/schools.model';

//const content = require('../../assets/json/recommendations.json');

@Injectable()
export class FirebaseService {
  private contentActivityId: string = '2WIsYxAhY3nMhOJMQVLE';

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {
  }

  public getSchools(limit?: number): Observable<School[]> {
    return this.firestore.collection('Schools', ref => ref.orderBy('name')).valueChanges();
  }

  public getSurveyAttributes(): Observable<SurveyAttribute[]> {
    return this.firestore.collection<SurveyAttribute>('surveyData', s => s.orderBy('index', 'asc')).valueChanges();
  }

  public getrecommendations(): Observable<Recommendation[]> {
    return this.firestore.collection<Recommendation>('recommendations').valueChanges();
  }
  
  public getContentActivities(subCollection: string): Observable<any> {
    return this.firestore.collection('contentActivities').doc(this.contentActivityId).collection(subCollection).valueChanges();
  }

  public addSurveyData(surveyData: UserInfo): void {
    this.firestore.collection('userInfo').doc(surveyData.id.toString()).set(surveyData);
  }

  public login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public getUserInfo(uid: string): Observable<UserInfo> {
    return this.firestore.collection('userInfo').doc(uid).valueChanges();
  }

  public signupUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((newCredential: firebase.auth.UserCredential) => {
        return newCredential;
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  public resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  public logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  
  //Import data to firestore
  public importDataToFirestore(source?: string): void {
    // content && Object.keys(content).forEach(key => {
    //   const nestedContent = content[key];
  
    //   if (typeof nestedContent === "object") {
    //       Object.keys(nestedContent).forEach(docTitle => {
    //         firebase.firestore()
    //               .collection(key)
    //               .doc(docTitle)
    //               .set(nestedContent[docTitle])
    //               .then((res) => {
    //                   console.log("Document successfully written!");
    //               })
    //               .catch((error) => {
    //                   console.error("Error writing document: ", error);
    //               });
    //       });
    //   }
    // });
    // content &&
    //   Object.keys(content).forEach(contentKey => {
    //     const nestedContent = content[contentKey];
    //     if (typeof nestedContent === "object") {
    //       Object.keys(nestedContent).forEach(docTitle => {
    //         firebase
    //           .firestore()
    //           .collection(contentKey)
    //           .doc(docTitle)
    //           .set(nestedContent[docTitle]);
    //       });
    //     }
    //   });
  }
}