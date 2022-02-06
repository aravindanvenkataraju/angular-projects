import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  templateUrl: './alert-warning.component.html',
  styleUrls: ['./alert-warning.component.css', '../app.component.css']
})
export class AlertWarningComponent implements OnInit {
  message = 'Warning! you are seeing a warning';
  constructor() { }

  ngOnInit(): void {
  }

}
