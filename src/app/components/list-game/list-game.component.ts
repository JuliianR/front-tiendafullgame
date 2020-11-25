import { Component, OnInit } from '@angular/core';

import { Juego } from '../../models/juego';
import { JuegoService } from '../../services/juego.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css'],
  providers:[JuegoService]
})
export class ListGameComponent implements OnInit {

	public juegos: Array<Juego>;
	public url;
  constructor(
  		private _juegoService: JuegoService
  	) { 
  		this.url = global;
  }

  ngOnInit(): void {
  	this.getJuegos();
  }

  getJuegos(){
  	this._juegoService.getJuegos().subscribe(
  		response => {
  			this.juegos = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

}
