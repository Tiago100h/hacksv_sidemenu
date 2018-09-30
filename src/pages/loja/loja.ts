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
    switch (this.item.nome) {
      case "Centauro":
        // code...
        this.produtos.push({
          nome: "Tênis Nike Revolution 4",
          valor: "R$199,00",
          img: "assets/imgs/"+ this.item.nome +"/img1.jpg"
        });
        this.produtos.push({
          nome: "Tênis Asics Gel Equation 9",
          valor: "R$299,00",
          img: "assets/imgs/"+ this.item.nome +"/img2.jpg"
        });
        this.produtos.push({
          nome: "Mountain Bike Caloi Extreme - Aro 29",
         valor: "R$1599,00",
          img: "assets/imgs/"+ this.item.nome +"/img3.jpg"
        });
        break;

        case "CacauShow":
        // code...
        this.produtos.push({
          nome: "TRUFAS BENDITO CACAO",
          valor: "R$9,99",
          img: "assets/imgs/"+ this.item.nome +"/img1.png"
        });
        this.produtos.push({
          nome: "TRUFINHA LACREME KIDS MILK SHAKE MORANGO",
          valor: "R$1,50",
          img: "assets/imgs/"+ this.item.nome +"/img2.png"
        });
        this.produtos.push({
          nome: "TABLETE RECHEADO INTENSIDADE",
         valor: "R$9,99",
          img: "assets/imgs/"+ this.item.nome +"/img3.png"
        });
        break;
      
        case "C&A":
        // code...
        this.produtos.push({
          nome: "camiseta 'lost paradise'",
          valor: "R$29,99",
          img: "assets/imgs/"+ this.item.nome +"/img1.webp"
        });
        this.produtos.push({
          nome: "camiseta 'train hard'",
          valor: "R$29,99",
          img: "assets/imgs/"+ this.item.nome +"/img2.webp"
        });
        this.produtos.push({
          nome: "camiseta esportiva ace basic",
         valor: "R$29,99",
          img: "assets/imgs/"+ this.item.nome +"/img3.webp"
        });
        break;
      
      case "Bahamas":
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