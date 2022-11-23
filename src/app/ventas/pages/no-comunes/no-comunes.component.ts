import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nselect
nombre: string = 'jose francisco';
genero: boolean = true;
generoS: string = this.genero.toString();


genderMap = {
  'true' : 'invitarlo',
  'false' : 'invitarla',
};


// i18nplural
clientes: string[] = ['Maria','Pedro', 'Hernando', 'Eduardo', 'Fernando' ];
clientesMap = {
  '=0': 'no tenemos ningun cliente',
  '=1': 'tenemos un cliente',
  'other': 'tenemos # clientes'
};

cambiarNombre(){
this.nombre = 'belinda',this.generoS = 'false';
};

borrarCliente(){
  this.clientes.splice(-1);
  console.log(this.clientes)
};

//keyValue

persona = {
  nombre : 'jose',
  edad : 32,
  direccion: 'barcelona'
};

heroes = [
  {
    nombre: 'superman',
    vuela: true,
  },
  {
    nombre: 'robin',
    vuela: false,
  },
  {
    nombre: 'aquaman',
    vuela: false,
  }
];

miObservable = interval(2000);

valorPromesa = new Promise((resolve,rejects)=>{
  setTimeout(() => {
    resolve('Tenemos Data de Promesa');    
  }, 3500);
})

}
