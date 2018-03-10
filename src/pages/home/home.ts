import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaCandidatosPage} from '../lista-candidatos/lista-candidatos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  nextpage(){
    this.navCtrl.push(ListaCandidatosPage);
    console.log(ListaCandidatosPage);
    
  }

}
