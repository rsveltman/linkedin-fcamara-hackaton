import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatosPreSelecionadosPage } from './candidatos-pre-selecionados';

@NgModule({
  declarations: [
    CandidatosPreSelecionadosPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatosPreSelecionadosPage),
  ],
})
export class CandidatosPreSelecionadosPageModule {}
