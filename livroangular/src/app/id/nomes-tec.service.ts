import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';


@Injectable({
  providedIn: 'root'
})
export class NomesTecService {

  //meulog: MeuLogService;

  constructor(@Optional() private meulog: MeuLogService) {
    //this.meuLog = meulog;
   }

  getNomesTec(): string [] {
    if(this.meulog){
    this.meulog.setLog('Consultou o array de tecnologias');//Invocamos o metodo da classe meu-log.
    }
    return ['Angular', 'TypeScript', 'javascript', ' HTML5', 'CSS3','Desenvolvendo com Agular'];
  }

  
}
