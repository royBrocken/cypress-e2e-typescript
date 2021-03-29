import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "";
  title = 'test';
  theStuffIsShown: boolean = false


  showTheStuff() {
    this.theStuffIsShown = true;
  }
}
