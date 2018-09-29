import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LanchonetePage } from '../lanchonete/lanchonete';

@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html'
})
export class AlimentacaoPage {
  selectedItem: any;
  items: Array<{nome: string, promocoes: string, img: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({
      nome: "Centauro",
      promocoes: "41 promoções",
      img: "assets/imgs/centauro.jpg"
    });
    this.items.push({
      nome: "CacauShow",
      promocoes: "31 promoções",
      img: "assets/imgs/cacaushow.jpg"
    });
    this.items.push({
      nome: "C&A",
      promocoes: "12 promoções",
      img: "assets/imgs/cea.jpg"
    });
    this.items.push({
      nome: "Bahamas",
      promocoes: "25 promoções",
      img: "assets/imgs/bahamas.jpg"
    });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LanchonetePage, {
      item: item
    });
  }

}
