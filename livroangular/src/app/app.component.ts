import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Livro Angular';

  //Esta variável se liga 
  desenvolvimento: string [] = ['Angular','JavaScript','TypeScript','HTML','CSS'];


  //--output-EventEmiter:  Variável que armazena o valor no componente pai.
  valor:string;

  constructor(private service: AlertaService){
  
  }

  //--output-EventEmiter:  metodo que recebendo os dados por event-binding Click na TAG-filho.
  valorPassado(valorPassado){
    this.valor = valorPassado;
  }

  /** metodo do serviço declarado globamente. 
    enviarMsg(): void {
    this.service.msgAlerta();
    }
   */
 


}
