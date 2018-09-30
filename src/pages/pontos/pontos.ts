import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PromocaoPage } from '../promocao/promocao';

@Component({
  selector: 'page-pontos',
  templateUrl: 'pontos.html'
})
export class PontosPage {
  selectedItem: any;
  items: Array<{ img: string, nome: string, pts: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({
      img: '../../assets/imgs/desconto.png',
      nome: "Burguer King",
      pts: "50pts"
    });
    this.items.push({
      img: '../../assets/imgs/desconto.png',
      nome: "Centauro",
      pts: "100pts"
    });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PromocaoPage, {
      item: item
    });
  }

}
