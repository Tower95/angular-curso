import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  // @Input('data') personajes: Personaje[] =[] ;


  constructor(
    private _dbzService : DbzService
  ) { }

  get personajes(){
    return this._dbzService.personajes;
  }

  ngOnInit(): void {
  }

  borrarPersonaje(event: any ){

    const index = event.target.value;

    this._dbzService.borrarPersonaje(index);
    
  }

}
