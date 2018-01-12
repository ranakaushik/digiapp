import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
 private droplets: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.droplets = this.navParams.get('droplets');
  }

  ionViewDidLoad() {}


   

doSelectsize(data){
  this.navCtrl.push('PropertiesPage',{droplets:data})
}
}