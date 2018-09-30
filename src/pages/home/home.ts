import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
  }

  lojas = [
    {
      nome: "KFC",
      descricao: "Kentucky Fried Chicken é uma rede de restaurantes de fast-food estadunidense, que explora a antiga receita de frango frito do Kentucky, criada pelo Coronel Harland Sanders, fundador do KFC, em 1939, na cidade de Corbin, no estado do Kentucky, nos Estados Unidos.",
      cuponsGerados: 59,
      imagem: "assets/imgs/kfc.jpg"
    },
    {
      nome: "Cacau Show",
      descricao: "Cacau Show é uma empresa alimentícia brasileira, localizada em Itapevi, no estado de São Paulo. É uma marca de chocolates 100% nacional, fundada por Alexandre Tadeu da Costa, aos 17 anos, no bairro da Casa Verde, zona norte de São Paulo, com a ajuda de uma funcionária e 500 dólares em 1988.",
      cuponsGerados: 45,
      imagem: "assets/imgs/cacaushow.jpg"
    },
    {
      nome: "McDonald's",
      descricao: "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda. Com sede nos Estados Unidos, a empresa começou em 1940 como uma churrascaria operada por Richard e Maurice McDonald.",
      cuponsGerados: 18,
      imagem: "assets/imgs/mcdonald.jpg"
    }
  ]

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Você encontrou uma promoção do Burger King!',
      duration: 3000,
      position: position
    });

    toast.present(toast);
  }

}
