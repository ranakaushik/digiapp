import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { DetailsPage } from './details';
import { DropletsPageModule } from '../droplets/droplets.module';


@NgModule({
  declarations: [
    DetailsPage,
  ],
  entryComponents: [
    DetailsPage
  ],
  imports: [
    IonicPageModule.forChild(DetailsPage),
    IonicModule,
    DropletsPageModule

  ],
})
export class DetailsPageModule {}
