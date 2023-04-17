import { Injectable } from '@angular/core';
import { configuration } from './configuration'
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor(private loc: Location) { }

  getConfig() {
    return this.config;
  }

  cancel() {
    this.loc.back()
  }

 


}
