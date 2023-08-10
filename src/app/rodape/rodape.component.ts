import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
  title: string = 'MayVelas';
  copyright: string = 'Desenvolvido em 2023';
  developer: string = 'Start Tech TOTVS';
  
redesSociais: Array<any> = [
    {
      nome: 'Facebook',
      link: 'http://www.facebook.com',
      icone: 'https://i.ibb.co/LZYBg8Q/logotipo-circular-do-facebook.png'
    },
    {
      nome: 'Instagram',
      link: 'http://www.instagram.com',
      icone: 'https://i.ibb.co/0nNbcgS/instagram-1.png'
    },
    {
      nome: 'Tik Tok',
      link: 'https://www.tiktok.com',
      icone: 'https://i.ibb.co/hWwWkfb/tik.png'
    }
  ]
}

