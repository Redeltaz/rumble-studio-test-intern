import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Time } from '../interfaces/time';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SavedTimestampService {
  timeCollection: AngularFirestoreCollection<Time>;
  time: Observable<Time[]>;
  timeDoc: AngularFirestoreDocument<Time>;

  constructor(public afs: AngularFirestore) {

    this.timeCollection = this.afs.collection('savedTimestamp', ref => ref.orderBy('name', 'asc'));

    this.time = this.timeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Time;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getTime(){
    return this.time;
  }

  setTime(time: Time){
    this.timeCollection.add(time);
  }

  deleteTime(time: Time){
    this.timeDoc = this.afs.doc(`savedTimestamp/${time.id}`);
    this.timeDoc.delete();
  }
}
