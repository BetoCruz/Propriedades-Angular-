import { Component, OnInit } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao: boolean = false;

  //-------------- Event keyup.enter ---------------------
  valores: string [] = [];


  constructor() { }

  ngOnInit():  void  {
  }


  meuClick(): void {
    console.log('Evento Meu click do botão');
  }

  digitou($event): void {
     console.log($event);
  }

  digitouVarTemplate(valor): void {
    console.log(valor);
  }

//---------------------Evento Keyup validando senha---------------------
  validaSenha(valor): void {
    if( valor.length >= 5){
      this.habilitarBotao = true;
    }else{
      this.habilitarBotao = false;
    }
  }
//Método usano para captura e apresentação de senha em alert()
  gravarSenha(senha): void {
    alert('Senha gravada com sucesso , sua senha é: ' + senha);
  }
  
//-------------- Event keyup.enter ---------------------
adicionar(valor: string):void{
  this.valores.push(valor);
}


}
