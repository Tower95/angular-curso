import { Injectable } from "@angular/core";

import { Personaje } from "../interface/dbz.interface";

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9001
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    },
  ];

  constructor() { }

  get personajes(): Personaje[] {

    return [...this._personajes];

  }

  agregarPersonaje(personaje: Personaje): void {

    this._personajes.push(personaje);

  }

  borrarPersonaje(i: number): void {

    this._personajes.splice(i, 1);

  }

}