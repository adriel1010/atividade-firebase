import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html',
})
export class AlimentacaoPage {

  aparecer: number;
  resultado: number;
  items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.resultado = this.navParams.get("imc");


    if(this.resultado < 15){
      this.items.push(1);
    }

    else if(this.resultado >= 15 && this.resultado < 18.5){
    this.items.push(2);
    }

    else if(this.resultado >= 18.6 && this.resultado < 24.9){
      this.items.push(3);
    }

    else if(this.resultado >= 25 && this.resultado < 29.9){
      this.items.push(4);
    }

    else if(this.resultado >= 30 && this.resultado < 39.9){
      this.items.push(5);
    }

    else if(this.resultado >= 40 ){
      this.items.push(6);
    }

    console.log(this.items);


  }




}
