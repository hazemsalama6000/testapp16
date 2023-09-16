import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { IStoreInterface } from './store/store';
import { InCrement, deCrement } from './store/actions/action';
import { nSelector } from './store/count.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterLink, RouterOutlet, RouterLinkActive
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'testapp16';
  boxType = "passsword";
  disabled = false;
  counter:number=0;
  data = ['sdf', 'sdf', 'sdf', 'sdfsdf'];

  constructor(private _store: Store<IStoreInterface>) {

  }

  ngOnInit(): void {
    this._store.select(nSelector).subscribe((data) => {
      this.counter=data;
    });
  }

  increase() {
    this._store.dispatch(new InCrement(2));
  }

  decrease() {
    this._store.dispatch(new deCrement(5));
  }


  getAge(age: HTMLSpanElement) {
    console.log(age);
    let p = document.createElement("p");
    p.innerHTML = "kkkkkkkkkkkkkkkk";
    age.appendChild(p);
  }
}
