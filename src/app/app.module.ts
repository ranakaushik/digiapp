import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpAuthInterceptor } from './interceptors/http-auth';
import { HttpErrorInterceptor } from './interceptors/http-error';
import { HttpLoaderInterceptor } from './interceptors/http-loader';

import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpLoaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ]
})
export class AppModule {}
