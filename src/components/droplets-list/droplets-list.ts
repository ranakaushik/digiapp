import { Component,  Output, EventEmitter, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../../pages/details/details';


@Component({
  selector: 'droplet-list',
  templateUrl: 'droplets-list.html'
})
export class DropletListComponent {
  navCtrl: any;
  @Input() droplets: any; 
  @Output() dropletSelected = new EventEmitter<any>();
  

  constructor() {
    
  }

  doSelection(data){
    //console.log(data)
   this.dropletSelected.emit(data);
  }
}
