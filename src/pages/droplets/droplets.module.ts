import { DropletProvider } from '../../providers/droplet/droplet';
import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { DropletsPage } from './droplets';

@NgModule({
  declarations: [
    DropletsPage
  ],
  imports: [
    IonicPageModule.forChild(DropletsPage),
    IonicModule,
    ComponentsModule
  ],
  entryComponents: [
    DropletsPage
  ],
  providers:[
    DropletProvider
  ]
})
export class DropletsPageModule {}
