import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-lanchonete',
  templateUrl: 'lanchonete.html'
})

export class LanchonetePage {
  item: any;
  produtos: Array<{nome: string, valor: string, img: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.item = navParams.get('item');
    this.produtos = [];

    switch (this.item.nome) {
      case "McDonald's":
        // code...
        this.produtos.push({
          nome: "Triplo Quarteirão",
          valor: "R$19,00",
          img: "assets/imgs/"+ this.item.nome +"/img1.png"
        });
        this.produtos.push({
          nome: "Big Tasty",
          valor: "R$20,00",
          img: "assets/imgs/"+ this.item.nome +"/img2.png"
        });
        this.produtos.push({
          nome: "Big Mac",
         valor: "R$1599,00",
          img: "assets/imgs/"+ this.item.nome +"/img3.png"
        });
        break;

        case "BoB'S":
        // code...
        this.produtos.push({
          nome: "SUPREME ARTESANAL",
          valor: "R$19,99",
          img: "assets/imgs/"+ this.item.nome +"/img1.png"
        });
        this.produtos.push({
          nome: "BIG BOB ARTESANAL",
          valor: "R$20,50",
          img: "assets/imgs/"+ this.item.nome +"/img2.png"
        });
        this.produtos.push({
          nome: "ARTESANAL BOURBON BACON",
         valor: "R$19,99",
          img: "assets/imgs/"+ this.item.nome +"/img3.png"
        });
        break;
      
        case "Burguer King":
        // code...
        this.produtos.push({
          nome: "Picanha Cheddar e Bacon",
          valor: "R$29,99",
          img: "assets/imgs/"+ this.item.nome +"/img1.png"
        });
        this.produtos.push({
          nome: "Mega Stacker Rodeio 2.0",
          valor: "R$29,99",
          img: "assets/imgs/"+ this.item.nome +"/img2.jpg"
        });
        this.produtos.push({
          nome: "Mega Stacker Cheddar 3.0",
         valor: "R$29,99",
          img: "assets/imgs/"+ this.item.nome +"/img3.jpg"
        });
        break;
      
      case "KFC":
        // code...
        this.produtos.push({
          nome: "Skate Street Dollar'",
          valor: "R$104,99",
          img: "assets/imgs/"+ this.item.nome +"/img1.jpg"
        });
        this.produtos.push({
          nome: "Prancha Stand Up Paddle ",
          valor: "R$3.352,99",
          img: "assets/imgs/"+ this.item.nome +"/img2.jpg"
        });
        this.produtos.push({
          nome: "Tênis Mood Move On ",
         valor: "R$59,99",
          img: "assets/imgs/"+ this.item.nome +"/img3.jpg"
        });
        break;
    }

  }

}