import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RoomComponent } from './components/room/room.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import {FormsModule} from '@angular/forms';
import { Globals } from './globals';
import { NewroomFormComponent } from './components/newroom-form/newroom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoomComponent,
    MessageListComponent,
    MessageFormComponent,
    NewroomFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
