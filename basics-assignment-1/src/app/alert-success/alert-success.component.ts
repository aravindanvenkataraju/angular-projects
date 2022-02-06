import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  // templateUrl: './alert-success.component.html',
  template: `<p class="success">{{message}}</p>`,
  styleUrls: ['./alert-success.component.css'],
  styles:[`.success{
    color: green
  }`]
})
export class AlertSuccessComponent implements OnInit {
  message = 'All good! No worries!'
  constructor() { }

  ngOnInit(): void {
  }

}
