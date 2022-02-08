import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent', {static: true}) newServerContentElement: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newServerNameElement: HTMLInputElement){
    this.serverCreated.emit({name: newServerNameElement.value, content: this.newServerContentElement.nativeElement.value});
  }
  onAddBlueprint(newServerNameElement: HTMLInputElement){
    this.blueprintCreated.emit({name: newServerNameElement.value, content: this.newServerContentElement.nativeElement.value});
  }
}
