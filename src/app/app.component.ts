import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREAMENT } from './actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @select(s => s.get('counter')) count;

  //No.1  messaging.newMessaging
  // @select(['messaging','newMessages']) newMessage;
  //No.2 messaginf.newMessaging
  // @select((s:IAppState) => s.messeging.newMessages) newMessage;

  constructor(private ngRedux: NgRedux<Map<string,any>>){
    
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREAMENT });
  }

}
