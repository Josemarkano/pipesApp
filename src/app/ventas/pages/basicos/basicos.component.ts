import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'jose francisco';
  nombreUpper: string = 'JOSE FRANCISCO';
  nombreCompleto: string = 'jOSe fRaNCisCo';

  fecha: Date = new Date(); // dia de hoy

}
