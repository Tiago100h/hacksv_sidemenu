import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-loja',
  templateUrl: 'loja.html'
})

export class LojaPage {
  item: any;
  produtos: Array<{nome: string, valor: string, img: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.item = navParams.get('item');
    this.produtos = [];
    this.produtos.push({
      nome: "Tênis",
      valor: "R$100,00",
      img: "assets/imgs/centauro.jpg"
    });
    this.produtos.push({
      nome: "Chocolate",
      valor: "R$10,00",
      img: "assets/imgs/centauro.jpg"
    });
    this.produtos.push({
      nome: "Camisa",
      valor: "R$50,00",
      img: "assets/imgs/centauro.jpg"
    });

  }

}