import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Url } from '../interfaces/url';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SavedUrlsService {
  urlCollection: AngularFirestoreCollection<Url>;
  url: Observable<Url[]>;
  urlDoc: AngularFirestoreDocument<Url>;

  constructor(public afs: AngularFirestore) {

    this.urlCollection = this.afs.collection('savedUrls', ref => ref.orderBy('name', 'asc'));

    this.url = this.urlCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Url;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    //pass to url an array of all our already saved url
  }

  getUrl(){
    return this.url;
    //simple getter function
  }

  setUrl(url: Url){
    this.urlCollection.add(url);
    //simple setter function
  }

  deleteUrl(url: Url){
    this.urlDoc = this.afs.doc(`savedUrls/${url.id}`);
    this.urlDoc.delete();
    //delete the selected document in firestore
  }
}

// https://stackoverflow.com/questions/52471489/angular-6-observable-explanation-in-plain-english
// Had trouble to understand why I needed to use observable, this post help me a lot

//https://stackoverflow.com/questions/49131895/how-to-use-snapshotchanges-method-to-get-both-key-value-and-filter-the-data/49132105
//to understand how to get the id (I used ValueChanges before)
