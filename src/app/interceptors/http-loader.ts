import { LoadingController } from 'ionic-angular';
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {

  constructor(private loaderCtrl: LoadingController){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let loader = this.loaderCtrl.create({
      content: 'Please wait ....'
    });

    loader.present();

    return next.handle(request).finally(
      ()=>loader.dismiss()
    )
  }
}
