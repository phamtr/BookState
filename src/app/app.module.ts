import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store'

import { BookState } from '../state/BookState'
import { TutorialState } from '../state/TutorialState'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
} from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    MdcButtonModule,
   MdcFabModule,
   MdcIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([
      BookState,
      TutorialState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
