import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf,  CommonModule]
})
export class HomeComponent implements OnInit, OnDestroy {
  // Guarda a referência do temporizador. Assim conseguimos interromper o temporizador a qualquer momento
    timerSubs!: Subscription;
  // Array com a URL das imagens do carrossel
   imagens: Array<any> = [
        'https://i.ibb.co/JBR8DYk/1.png',
        'https://i.ibb.co/4mSjvvB/2.png',
        'https://i.ibb.co/0B3F50R/3.png'
    ];
  // Guarda a posição no array "imagens" que corresponde a imagem que está sendo exibidano carrossel
    private _indexImagemAtiva: number = 0;
    get indexImagemAtiva() {
      return this._indexImagemAtiva;
    }
  
    set indexImagemAtiva(value: number) {
      this._indexImagemAtiva =
        value < this.imagens.length ? value : 0;
    }
  
    ngOnInit(): void {
      this.iniciarTimer();
    }
  
    ngOnDestroy(): void {
      this.pararTimer();
    }
  
    iniciarTimer(): void {
      this.timerSubs = timer(3000).subscribe(() => {
        this.ativarImagem(
          this.indexImagemAtiva + 1
        );
      });
    }
  
    pararTimer(): void {
      this.timerSubs?.unsubscribe();
    }
  
    ativarImagem(index: number): void {
      this.indexImagemAtiva = index;
      this.iniciarTimer();
    }
//-----------------FIM DO CARROSSEL-------------------

  constructor(private router: Router) { }
//-------------DETALHES-----------------
  verDetalhes(velaId: string) {
    this.router.navigate(['/detalhes', velaId]);
  }

  verdetalhes(velaespeciaisId: string) {
    this.router.navigate(['/detalhes', velaespeciaisId]);
  }

  ver_Detalhes(oleoId: string) {
    this.router.navigate(['/detalhes', oleoId]);
  }
//-------------FAVORITOS-----------------
  toogleFavorito(index: number): void {
    this.velas[index].favorito = !this.velas[index].favorito
  }

  toogleFavorito2(index: number): void {
    this.velasEspeciais[index].favorito = !this.velasEspeciais[index].favorito
  }

  toogleFavorito3(index: number): void {
    this.oleos[index].favorito = !this.oleos[index].favorito
  }

  nome: string = 'Mayla';
  sobrenome: string = 'Motobe';

  //OBJETO DAS VELAS AROMÁTICAS
  velas: Array<any> = [
    {
      id: 1,
      titulo: 'Vela de Baunilha',
      foto: 'https://i.ibb.co/mRTrXJK/baunilha.png',
      gramas: 300,
      preco: 60.00,
      aroma: 'doce',
      favorito: true
    },
    {
      id: 2,
      titulo: 'Vela de Limão',
      foto: 'https://i.ibb.co/8mH1bZr/capim.png',
      gramas: 300,
      preco: 70.90,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Vela de Lavanda',
      foto: 'https://i.ibb.co/SvhFt4k/lavanda.png',
      gramas: 300,
      preco: 80.00,
      favorito: false
    },
  ]
  //OBJETO DAS VELAS AROMÁTICAS ESPECIAIS
  velasEspeciais: Array<any> = [
  {
    id: 1,
    titulo: 'Vela de Algodão Clean',
    foto: 'https://i.ibb.co/prqtxMD/Especial-Algodao.jpg',
    peso: 365,
    preco: 100,
    aroma: 'doce',
    favorito: false
  },
  {
    id: 2,
    titulo: 'Vela de Jasmin',
    foto: 'https://i.ibb.co/6BXms0b/Especial-Jasmin.jpg',
    peso: 300,
    preco: 100,
    favorito: true
  },
  {
    id: 3,
    titulo: 'Vela de Ervas',
    foto: 'https://i.ibb.co/THQKJFL/Especial-Ervas.jpg',
    peso: 300,
    preco: 100,
    favorito: false
  },
]
  //OBJETO DOS ÓLEOS ESSENCIAIS
oleos: Array<any> = [
  {
    id: 1,
    titulo: 'Óleo de Maracujá',
    foto: 'https://i.ibb.co/CP4JdtZ/oleomaracuja.jpg',
    peso: 10,
    preco: 30,
    favorito: false
  },
  {
    id: 2,
    titulo: 'Óleo de Pitanga',
    foto: 'https://i.ibb.co/5kS0MW7/oleopitanga.jpg',
    peso: 10,
    preco: 30,
    aroma: 'doce',
    favorito: true
  },
  {
    id: 3,
    titulo: 'Óleo de Maça',
    foto: 'https://i.ibb.co/4SHRXY9/oleomaca.jpg',
    peso: 10,
    preco: 30,
    favorito: false
  },
]
}