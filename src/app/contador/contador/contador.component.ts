import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{titulo}}</h1>

  <span>la base es {{base}}</span>
  <br>
  <br>

  <button (click)="acumular(-base)"> - {{base}} </button>

  <span> {{number}} </span>
 
  <button (click)="acumular(base)"> + {{base}} </button>
  `
})
export class ContadorComponent {

  public titulo: string = 'Contador App';
  public number: number = 0;
  public base: number = 5;


  public acumular(valor: number): void {

    this.number += valor;


  }
}