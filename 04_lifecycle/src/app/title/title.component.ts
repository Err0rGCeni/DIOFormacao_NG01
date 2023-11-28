import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input()
  nome:string = 'Me'

  constructor() {
    console.log(`<app-title> - constructor: Construção como ${this.nome}`)
  }
  ngOnChanges(): void {
    console.log(`<app-title> - onChanges: Mudança para ${this.nome}`)
  }

  ngOnInit(): void {
    console.log(`<app-title> - ngOnInit: Inicialização ${this.nome}!`)
    setTimeout(() => {
      this.nome = `onChanges não me pega, ${this.nome}`;      
    }, 1000);
  }
}
