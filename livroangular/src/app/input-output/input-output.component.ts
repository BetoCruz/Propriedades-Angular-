import { Component, Input, Output,  EventEmitter, OnInit, } from '@angular/core';


import {  } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  //---Permite a variável emitir informações para o componente pai. 
  @Output() nomeClicado = new EventEmitter();

  //---aplicação do decorator Input-----------
  @Input() menu: string;

  constructor() { }

  ngOnInit(): void {
  }


  enviarNome(valor): void {
    this.nomeClicado.emit(valor)
  }

}
