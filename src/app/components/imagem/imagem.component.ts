import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  fechado = 'fechado.webp'; // Caminho da imagem do biscoito fechado
  aberto = 'aberto.webp';   // Caminho da imagem do biscoito aberto
  biscoitoAberto = false;   // Variável que controla se o biscoito está aberto ou fechado
  frase: string = '';       // Variável que armazena a frase a ser exibida

  frases: string[] = [
    'Por que o JavaScript foi ao terapeuta? Porque tinha muitos callbacks não resolvidos',
    'O que um banco de dados disse para o outro? Nossa conexão é incrível',
    'Por que o programador sempre está calmo? Porque ele sabe que tudo é questão de lógica',
    'O que um código-fonte disse para o outro? Sem você, minha vida é um bug',
    'Feito por Coletti e Petrao',
    'Qual é o animal mais conectado? O Wi-Fi-rão',
    'Por que o programador não gosta de praia? Porque tem muito bug na areia',
    'Como o CSS expressa seus sentimentos? Com muito estilo',
    'O que o servidor disse quando foi desligado? Até logo, mundo',
    'Por que os números quebraram? Porque não aguentaram a pressão decimal'
  ];

  // Função que alterna entre biscoito aberto e fechado e gera a frase quando o biscoito é aberto
  toggleBiscoito() {
    this.biscoitoAberto = !this.biscoitoAberto; // Alterna o estado do biscoito
    if (this.biscoitoAberto) {
      // Quando o biscoito é aberto, escolhe uma frase aleatória
      this.frase = this.frases[Math.floor(Math.random() * this.frases.length)];
    } else {
      // Quando o biscoito é fechado, limpa a frase
      this.frase = '';
    }
  }
}
