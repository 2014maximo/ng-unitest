import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unitest';
  positivo = true;

  sumar(a:number,b:number):number{
    return a + b;
  }
}
