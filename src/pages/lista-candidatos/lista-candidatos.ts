import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidatoPage } from '../candidato/candidato';

/**
 * Generated class for the ListaCandidatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-candidatos',
  templateUrl: 'lista-candidatos.html',
})
export class ListaCandidatosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  nextPage(){
    this.navCtrl.push(CandidatoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCandidatosPage');
  }

}
