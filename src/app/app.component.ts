import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'app-root', //Directive name used in HTML
  templateUrl: './app.component.html', //View layout, html or html file
  styleUrls: ['./app.component.css'] //styles used for the app
})
export class AppComponent {
  title = 'The Silmarillibros';
}
