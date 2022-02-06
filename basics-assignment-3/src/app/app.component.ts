import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _defaultShowParagraph: boolean = false;
  _defaultButtonTile: string = 'Display Details';
  showParagraph: boolean = this._defaultShowParagraph;
  buttonTitle: string = this._defaultButtonTile;
  clickLogLines:string[] = [];
  logLineClass:  Record<string, boolean> = {};
  onButtonClick(): void{
    this.showParagraph = !this.showParagraph;
    this.buttonTitle = this.showParagraph?'Hide Details':this._defaultButtonTile;
    this.clickLogLines.push(`Button clicked at ${new Date()}`);
    this.setLogLineClass();
  }
  getLogStyle(): string{
    return this.clickLogLines.length>4?'blue':'';
  }
  setLogLineClass(): void{
    this.logLineClass = {
      whiteFont: this.clickLogLines.length>4
    };
  }
}
