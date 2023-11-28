import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
  implements OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  quantidade: number = 0;

  constructor() {
    console.log(`<app-check-sample> - constructor: ${this.quantidade}`)
  }

  adicionar() {
    this.quantidade += 1
  }

  decrementar() {
    this.quantidade -= 1
  }

  duplicar() {
    setTimeout(() => {
      this.quantidade *= 2
    }, 5000);
  }

  ngOnInit(): void {
    console.log(`<app-check-sample> - ngOnInit: ${this.quantidade}`);
  }

  //Check -> Content -> View  
  ngDoCheck(): void {
    console.log(`<app-check-sample> - ngDoCheck: ${this.quantidade}`);
  }

  //Quando o primeiro conteúdo é iniciado(1x)
  ngAfterContentInit(): void {
    console.log(`<app-check-sample> - ngAfterContentInit: ${this.quantidade}`);
  }

  //Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log(`<app-check-sample> - ngAfterContentChecked: ${this.quantidade}`);
  }

  //Depois da inicialização da View (1x)
  ngAfterViewInit(): void {
    console.log(`<app-check-sample> - ngAfterViewInit: ${this.quantidade}`);
  }

  //Após uma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log(`<app-check-sample> - ngAfterViewChecked: ${this.quantidade}`);
  }

  ngOnDestroy(): void {
    console.log(`<app-check-sample> - ngOnDestroy: ${this.quantidade}`);
  }
}
