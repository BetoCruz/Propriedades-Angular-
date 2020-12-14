import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  
  //nomes: string [] = ["joão", "Maria", "Humberto","Steve Rogers" ];

  nomes: any [] = [
    {id:1, nome: "João"},
    {id:2, nome:"Maria"},
    {id:3, nome:"Humberto"},
    {id:4, nome:"Steve Rogeres"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  meuSave(index: number, nomes: any){
    return nomes.id;
  }

  atualizar(){
    this.nomes = [
      {id:1, nome: "João"},
      {id:2, nome:"Maria"},
      {id:3, nome:"Pietro"},
      {id:4, nome:"Steve Rogeres"},
      {id:5, nome:"tony Starks"}
    ];
  }

}
