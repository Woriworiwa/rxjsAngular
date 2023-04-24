import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, tap} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStoreService} from "../services/angular-fire-store.service";
import {CodeSnippet} from "../models/code-snippet.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

  codeSnippets$: Observable<CodeSnippet[]> = this.store.getAll();

  // codeSnippets$ = this.store.collection('code-snippets').snapshotChanges()
  //   .pipe(
  //     map(response =>
  //       response.map(item => item.payload.doc.data())
  //     ),
  //     tap((response) => console.log('response ', response))
  //   )

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private store: AngularFireStoreService) {
  }
}
