import { Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges, OnDestroy {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent', {static: true}) newServerContentElement: ElementRef;
  constructor() { 
    console.log('Constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  

  onAddServer(newServerNameElement: HTMLInputElement){
    this.serverCreated.emit({name: newServerNameElement.value, content: this.newServerContentElement.nativeElement.value});
  }
  onAddBlueprint(newServerNameElement: HTMLInputElement){
    this.blueprintCreated.emit({name: newServerNameElement.value, content: this.newServerContentElement.nativeElement.value});
  }


}
