import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Config del locale de la app (no global global)
import localeEs from '@angular/common/locales/es-419';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEs )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    SharedModule,
  ],
  providers: [
    // Locale de forma global 
    { 
      provide: LOCALE_ID, useValue: 'es-419' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
