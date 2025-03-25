import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() biscoitoAberto: boolean = false;  

  fechado = 'fechado.webp'; 
  aberto = 'aberto.webp';
}
