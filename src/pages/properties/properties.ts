import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-properties',
  templateUrl: 'properties.html',
})
export class PropertiesPage {
  private droplets: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.droplets = this.navParams.get('droplets');
  }


  ionViewDidLoaddat (){}


}
