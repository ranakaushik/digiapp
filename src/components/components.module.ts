import { NgModule } from '@angular/core';
import { DropletListComponent } from './droplets-list/droplets-list';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [DropletListComponent],
	imports: [IonicModule],
	exports: [DropletListComponent]
})
export class ComponentsModule {}
