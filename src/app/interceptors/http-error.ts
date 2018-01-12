import { AlertController, LoadingController } from 'ionic-angular';
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private alertCtrl: AlertController, private loaderCtrl: LoadingController) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).do(
      (event: HttpEvent<any>) => {},
      (err: any) => this.showAlert(err)
    )
  }
  private showAlert(error: any){
    if (error instanceof HttpErrorResponse) {
      let loader = this.alertCtrl.create({
        title: 'Network Error!',
        subTitle: error.error.message,
        buttons: ['OK']
      });
      loader.present();
    }
  }
}
