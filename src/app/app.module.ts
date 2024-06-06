import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//Configuracion del locale de la app

import localeEsPA from '@angular/common/locales/es-PA';
import localeJa from '@angular/common/locales/ja';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPA);
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [
    {
    provide: LOCALE_ID, useValue:'es-PA'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
