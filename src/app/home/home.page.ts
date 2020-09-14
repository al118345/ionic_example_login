import { Component } from '@angular/core';
import {ComunicacionesService} from '../services/comunicaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private comunicaciones: ComunicacionesService) {
    console.log(comunicaciones.login('demo', 'demo'));
  }

}
