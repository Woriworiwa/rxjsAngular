import {Injectable} from '@angular/core';

import {Firestore, collectionData, collection} from '@angular/fire/firestore';

import {Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {map} from "rxjs/operators";
import {CodeSnippet} from "../models/code-snippet.model";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AngularFireStoreService {
  private dbPath = '/code-snippets';
  private codeSnippetsRef: AngularFirestoreCollection<CodeSnippet>;

  constructor(private firestore: AngularFirestore) {
    this.codeSnippetsRef = firestore.collection(this.dbPath);
  }

  getAll() {
    return this.codeSnippetsRef.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(item => {
          return {
            id: item.payload.doc.id,
            name: item.payload.doc.data().name,
            code: item.payload.doc.data().code
          } as CodeSnippet;
        })
      })
    );
  }

  create(codeSnippet: CodeSnippet): any {
    return this.codeSnippetsRef.add({ ...codeSnippet });
  }

  update(id: string, data: any): Promise<void> {
    return this.codeSnippetsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.codeSnippetsRef.doc(id).delete();
  }


}
