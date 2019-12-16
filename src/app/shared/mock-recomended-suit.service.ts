import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class MockRecomendedSuitService {

  mockList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  GetMockRecommendedSuit() {
    this.mockList = this.db.list('mock-recomended-suit');
    return this.mockList;
  }
}
