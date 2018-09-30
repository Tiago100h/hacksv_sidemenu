import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'slides.html'
})
export class SlidesPage {
  constructor(public navCtrl: NavController) {
    
  }

  slides = [
    {
      title: "Bem vindo ao Interavix",
      description: "O <b>Interavix</b> tem o intuito de integrar você cliente com as lojas do Shopping Vitória ao alcance de um toque.",
      image: "assets/imgs/logosv.png",
    },
    {
      title: "O que é o Interavix?",
      description: "<b>Interavix</b> é um aplicativo gratuito que tem como vantagem além da exibição das lojas e produtos, um sistema de pontos que pode  gerar descontos e beneficios para você cliente, através do deslocamento pelo nosso estabelecimento.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },    
  ];

  itemTapped() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LoginPage);
  }
  
}