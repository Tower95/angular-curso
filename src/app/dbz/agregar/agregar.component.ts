import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(
    private _dbzService: DbzService
  ) { }
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); 

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return; }

    // this.onNuevoPersonaje.emit(this.nuevo);
    
    this._dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };

  }

}
