import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterpolation-binding',
  templateUrl: './iterpolation-binding.component.html',
  styleUrls: ['./iterpolation-binding.component.css']
})
export class IterpolationBindingComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }


  
  getLivro(): string{
    return 'Livro angular';
  }
  getNumero(): number {
    return 6;
  }

}
