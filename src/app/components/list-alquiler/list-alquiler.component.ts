import { Component, OnInit } from '@angular/core';

import { Alquiler } from '../../models/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-list-alquiler',
  templateUrl: './list-alquiler.component.html',
  styleUrls: ['./list-alquiler.component.css'],
  providers:[AlquilerService]
})
export class ListAlquilerComponent implements OnInit {

	public alquileres: Array<Alquiler>;
	public url;
  constructor(
  		private _alquilerService: AlquilerService
  	) { 
  		this.url = global;
  }

  ngOnInit(): void {
  	this.getAlquileres();
  }

  getAlquileres(){
  	this._alquilerService.getAlquileres().subscribe(
  		response => {
  			this.alquileres = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

}
