import { Component } from '@angular/core';
import { BiscoitoComponent } from './components/biscoito/biscoito.component';
import { ImagemComponent } from './components/imagem/imagem.component';
import { FraseComponent } from './components/frase/frase.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BiscoitoComponent, ImagemComponent, FraseComponent],
})
export class AppComponent {
  biscoitoAberto: boolean = false;
  frase: string = '';


  onFraseGerada(novaFrase: string) {
    this.frase = novaFrase;
  }

  
  onBiscoitoAberto(status: boolean) {
    this.biscoitoAberto = status;
  }
}
