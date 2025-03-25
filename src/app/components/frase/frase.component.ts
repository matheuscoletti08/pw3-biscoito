import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent {
  @Input() frase: string = '';  
}
