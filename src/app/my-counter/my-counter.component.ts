import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './../actions/counter';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  /**
   * 
   * @param type 
   * 1 => increment
   * 2 => decrement
   * 3 => reset
   */
  updateCount(type) {
    switch (type) {
      case 1:
          this.store.dispatch(increment());
        break;
      case 2:
          this.store.dispatch(decrement());
        break;
      case 3:
          this.store.dispatch(reset());
        break;
    }
  }


  ngOnInit() {
  }

}
