import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PasswordCheatSheetComponent} from './password-cheat-sheet/password-cheat-sheet.component';
import {RandomStringService} from './services/random-string.service';


@NgModule({
  declarations: [
    AppComponent,
    PasswordCheatSheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RandomStringService],
  bootstrap: [AppComponent]
})
export class AppModule {}
