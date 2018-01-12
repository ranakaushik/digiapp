import { AlertController, LoadingController } from 'ionic-angular';
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private alertCtrl: AlertController, private loaderCtrl: LoadingController) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        ContentType: 'application/json',
        Authorization: `Bearer cf2c750a0d8f0e32dc1ffe5adff5b9c96ec4ef9322475d9d32064708e1f60b8c`
      }
    });
    return next.handle(request);
  }
}
