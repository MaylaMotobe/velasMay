import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {

  titulo: string = 'Iluminando Momentos com Fragrâncias Cativantes!';
  foto: string = 'https://i.ibb.co/0rhjSjH/avataaars-1.png';

  description: string = 'Na MayVelas, somos mais do que apenas uma loja de velas aromáticas. Somos criadores de ambientes acolhedores, transformando cada espaço em uma experiência olfativa única e memorável. Desde a nossa fundação, dedicamo-nos a combinar arte e ciência para produzir velas que transcendem o comum, elevando o seu dia-a-dia a um novo nível de sofisticação sensorial.';
  description2: string = 'Estamos comprometidos com a sustentabilidade e o respeito pelo meio ambiente. Utilizamos ceras naturais e materiais recicláveis em nossos produtos, minimizando nosso impacto no planeta. Além disso, incentivamos o reuso das nossas embalagens, promovendo a conscientização sobre a importância da preservação ambiental.';
  description3: string = 'Junte-se a nós nessa jornada perfumada e descubra como uma vela pode transformar um espaço em um refúgio de bem-estar. A MayVelas está aqui para despertar suas sensações e adicionar um toque de luxo aromático à sua vida.';
}
