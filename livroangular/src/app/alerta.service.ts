import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  msgAlerta():void {
    alert('Livro angular 2 / Consumo de serviço global do app');
    prompt('Livro angular 2 / Consumo de serviço global do app');
  }

}
