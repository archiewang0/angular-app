import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
// 在app.module 加入Directive 就可以隨意地在任何component進行使用
import { BetterHightlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgModelDirective } from './hostbinding.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent, 
    BasicHighlightDirective,
    BetterHightlightDirective,
    UnlessDirective,
    DropdownDirective,
    NgModelDirective
  ],
  imports: [
    BrowserModule ,
    FormsModule ,  //<-如果有form表單的話需要 imports FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
