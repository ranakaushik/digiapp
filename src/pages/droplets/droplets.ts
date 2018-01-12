import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DropletProvider } from '../../providers/droplet/droplet';



@IonicPage()
@Component({
  selector: 'page-droplets',
  templateUrl: 'droplets.html',
})
export class DropletsPage {

  private droplets: any = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dropletService: DropletProvider) { }

  ionViewDidLoad() {
    this.dropletService.all().subscribe(
      data=> {
        console.log(data);
        this.droplets = data['droplets']
      },
      error=>console.log(error)
    )
  }
  
  
  navigateDetail(data) {
    this.navCtrl.push('DetailsPage',{droplets:data})
   //console.log(data);
     }

}
