import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiniwordComponent } from './miniword/miniword.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { RainbowDirectiveDirective } from './rainbow-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MiniwordComponent,
    RainbowComponent,
    RainbowDirectiveDirective,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
