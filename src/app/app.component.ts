import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent implements OnInit{
  title = 'testapp16';
  boxType = "passsword";
  disabled=false;

  data=['sdf','sdf','sdf','sdfsdf'];

  ngOnInit(): void {
  }
 

  getAge(age: HTMLSpanElement) {
    console.log(age);
    let p = document.createElement("p");
    p.innerHTML = "kkkkkkkkkkkkkkkk";
    age.appendChild(p);
  }
}
