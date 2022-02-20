import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { SortArrayPipe } from './sort-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    SortArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
