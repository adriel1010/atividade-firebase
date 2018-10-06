import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Imc } from '../../model/imc';
import { EditarImcPage } from '../editar-imc/editar-imc';
import { ImcService } from '../../service/imc.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AlimentacaoPage } from '../alimentacao/alimentacao';


@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  private imc: Imc = new Imc();

  items: Observable<Imc[]>

  constructor(public navCtrl: NavController, private imcService: ImcService) {
    this.items = this.imcService.getImcs().valueChanges();
  }

  verificarAlimentacao(imc: number){
    this.navCtrl.push(AlimentacaoPage, {"imc":imc});
  }





}
