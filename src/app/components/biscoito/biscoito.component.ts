import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  @Output() frase = new EventEmitter<string>(); 
  @Output() biscoitoAberto = new EventEmitter<boolean>(); 

  fechado = 'fechado.webp'; 
  aberto = 'aberto.webp';
  biscoitoAbertoStatus = false;

  frases: string[] = [
    'Por que o JavaScript foi ao terapeuta? Porque tinha muitos callbacks não resolvidos',
    'O que um banco de dados disse para o outro? Nossa conexão é incrível',
    'Por que o programador sempre está calmo? Porque ele sabe que tudo é questão de lógica',
    'O que um código-fonte disse para o outro? Sem você, minha vida é um bug',
    'Qual é o animal mais conectado? O Wi-Fi-rão',
    'Por que o programador não gosta de praia? Porque tem muito bug na areia',
    'Como o CSS expressa seus sentimentos? Com muito estilo',
    'O que o servidor disse quando foi desligado? Até logo, mundo',
    'Por que os números quebraram? Porque não aguentaram a pressão decimal'
  ];

  quebrarBiscoito() {
    this.biscoitoAbertoStatus = true;
    const fraseAleatoria = this.frases[Math.floor(Math.random() * this.frases.length)];
    this.frase.emit(fraseAleatoria); 
    this.biscoitoAberto.emit(this.biscoitoAbertoStatus); 
  }

  reiniciarBiscoito() {
    this.biscoitoAbertoStatus = false;
    this.frase.emit(''); 
    this.biscoitoAberto.emit(this.biscoitoAbertoStatus); 
  }
}
