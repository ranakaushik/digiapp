import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

/*
  Generated class for the DropletProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DropletProvider {

  constructor(private api: ApiProvider) {}

  all(){
    return this.api.get('/droplets')
  }

  get(droplet_id: string){
    return this.api.get(`/droplets/${droplet_id}`)
  }
}
