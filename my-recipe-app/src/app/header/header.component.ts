import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigationClicked: EventEmitter<string> = new EventEmitter();
  currentPage: string = "recipes";
  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(navigation: string){
    this.currentPage = navigation;
    this.navigationClicked.emit(navigation);
  }
}
