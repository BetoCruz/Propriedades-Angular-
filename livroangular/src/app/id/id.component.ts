import { Component, OnInit, Optional } from '@angular/core';

import{ NomesTecService } from './nomes-tec.service';//Imports de serviços
import{ MeuLogService } from './meu-log.service';//Imports de serviços
import{ AlertaService } from '../alerta.service';//Import de serviço global

//import{ MeuLogService } from './meu-log.service';


@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
  providers: [NomesTecService, MeuLogService]
})
export class IdComponent implements OnInit {

  tecnologias: string [] = [];

/* -------Serviços instanciados manualmente!--------------
meuService: NomesTecService;  //-> instanciando a classe.
meuLog: MeuLogService;
*/

/*-------Serviços instanciados manualmente!--------------
constructor() {
this.meuLog = new MeuLogService;
this.meuService = new NomesTecService(this.meuLog);
this.tecnologias = this.meuService.getNomesTec();//Variável tecnologia recebe a instancia do Serv. e metodo
*/

// -------INJEÇÃO DE DEPENDENCIAS COM GERENCIADOR DO ANGULAR---------
  constructor(private meuService: NomesTecService, private meuAlerta: AlertaService) {
    this.tecnologias = meuService.getNomesTec();
    this.meuAlerta.msgAlerta();
  }

  ngOnInit(): void {
  }

}
