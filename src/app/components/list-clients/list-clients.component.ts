import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers:[ClienteService]
})
export class ListClientsComponent implements OnInit {

	public clientes: Array<Cliente>;
	public url;
  constructor(
  		private _clienteService: ClienteService
  	) { 
  		this.url = global;
  }

  ngOnInit(): void {
  	this.getClientes();
  }

  getClientes(){
  	this._clienteService.getClientes().subscribe(
  		response => {
  			this.clientes = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

}
