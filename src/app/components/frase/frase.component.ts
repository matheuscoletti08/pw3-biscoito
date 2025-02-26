// Feito por Matheus Coletti e Pedro Balieiro
import { Component } from '@angular/core';

@Component({
  selector: 'app-frase',
  imports: [],
  templateUrl: './frase.component.html',
  styleUrl: './frase.component.css'
})
export class FraseComponent {
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

  piadocadomal: string = this.frases[Math.floor(Math.random() * this.frases.length)];
}
  

