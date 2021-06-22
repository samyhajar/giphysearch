import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Giphy Search';
  performSearch(searchTerm: HTMLInputElement): void {
    console.log(`User entered: ${searchTerm.value}`);
}
}
