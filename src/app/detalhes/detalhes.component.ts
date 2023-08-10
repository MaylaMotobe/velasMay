import { Component } from '@angular/core';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'], 
  standalone: true,
})
export class DetalhesComponent {

  titulo: string = 'Vela de Baunilha';
  foto: string = 'https://i.ibb.co/mRTrXJK/baunilha.png';
  foto2: string = 'https://i.ibb.co/VDBQj09/estrelas.png';

  description: string = 'A Vela Aromática Baunilha é produzida pelo método hand pouring, com blend de cera 100% vegetal e pavio de algodão. Foi especialmente formulada para que você desfrute do seu aroma e do ambiente agradável que cria ao acendê-la, proporcionando a sensação de bem-estar.';
  description2: string = 'Estamos comprometidos com a sustentabilidade e o respeito pelo meio ambiente. Utilizamos ceras naturais e materiais recicláveis em nossos produtos, minimizando nosso impacto no planeta. Além disso, incentivamos o reuso das nossas embalagens, promovendo a conscientização sobre a importância da preservação ambiental.';
  description3: string = 'Junte-se a nós nessa jornada perfumada e descubra como uma vela pode transformar um espaço em um refúgio de bem-estar. A MayVelas está aqui para despertar suas sensações e adicionar um toque de luxo aromático à sua vida.';
  description4: string = '20 avaliações | Sem perguntas'

}