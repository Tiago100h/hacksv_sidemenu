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
      nome: "McDonald's",
      promocoes: "41 promoções",
      img: "assets/imgs/mcdonald.jpg"
    });
    this.items.push({
      nome: "BoB'S",
      promocoes: "31 promoções",
      img: "assets/imgs/bobs.jpg"
    });
    this.items.push({
      nome: "Burguer King",
      promocoes: "12 promoções",
      img: "assets/imgs/bk.jpg"
    });
    this.items.push({
      nome: "KFC",
      promocoes: "25 promoções",
      img: "assets/imgs/kfc.jpg"
    });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LanchonetePage, {
      item: item
    });
  }

}
