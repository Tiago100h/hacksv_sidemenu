import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LojaPage } from '../loja/loja';

@Component({
  selector: 'page-promocao',
  templateUrl: 'promocao.html'
})
export class PromocaoPage {
  selectedItem: any;
  items: Array<{ img: string, nome: string, desconto: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({
      img: this.selectedItem.img,
      nome: this.selectedItem.nome,
      desconto: "20% em dois lanches"
    });
    this.items.push({
      img: this.selectedItem.img,
      nome: this.selectedItem.nome,
      desconto: "15% em dois lanches"
    });

  }  

}
