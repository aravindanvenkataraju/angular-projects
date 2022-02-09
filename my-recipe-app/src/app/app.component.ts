import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-recipe-app';
  currentPage: string = 'recipes';
  onNavigationClicked(navigation: string){
    this.currentPage = navigation;
  }
}
