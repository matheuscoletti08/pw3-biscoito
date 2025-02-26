import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FraseComponent } from "./components/frase/frase.component";
import { ImagemComponent } from "./components/imagem/imagem.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FraseComponent, ImagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biscoit';
}
