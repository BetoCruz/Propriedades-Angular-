import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  
  tamanho: number = 20;
  valorFonte: string = this.tamanho + 'px';
  
  validaFonte: boolean = false;
  validaCor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.tamanho ++;
    this.valorFonte = this.tamanho + 'px';
  }
  mudaFonte(){
    this.validaFonte = !this.validaFonte;
  }
  mudaCor(){
    this.validaCor = !this.validaCor;
  }



  /**-------------------Ex ----------------- */
  tamanhoEx: number = 30;
  valorFonteEx: string = this.tamanhoEx + 'px';

  validaFonteEx: boolean = false;
  validaCorEx: boolean = false;


  incrementaEx(){
    this.tamanhoEx ++;
    this.valorFonteEx = this.tamanhoEx + 'px';
  }
  DecrementaEx(){
    this.tamanhoEx --;
    this.valorFonteEx = this.tamanhoEx + 'px';
  }
  
  mudaFonteEX(){
    this.validaFonteEx = !this.validaFonteEx;
  }
  mudaCorEx(){
    this.validaCorEx = !this.validaCorEx;
  }

}
