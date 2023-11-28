# Fundamentos & Introdução ao Angular

## DOM

- **Document Object Model (DOM)**: Interface de programação para documentos HTML, XML e SVG. Fornece uma **representação estruturada do documento** como uma árvore.
  - O DOM define métodos que permitem acesso à árvore, permitindo alterações na estrutura, estilo e conteúdo do documento.
  - Os nós no DOM representam elementos HTML, e eles podem ter manipuladores de eventos.
  - O DOM conecta páginas web a scripts ou linguagens de programação.
- **Virtual DOM**: Representação leve em JavaScript do Modelo de Objeto de Documento (DOM).
  - O Virtual DOM é **mantido na memória** e **manipulado pelo código** da aplicação. Quando necessário, ele é usado para atualizar o DOM real no navegador.
  - Frameworks como React, Vue.js e Elm o utilizam.
- Shadow DOM: Permite anexar uma árvore DOM oculta a um elemento, escondendo os detalhes internos dessa árvore do JavaScript e CSS da página.
  - Começa com um **Shadow Root**, sob a qual se pode anexar qualquer elemento, da mesma forma que no DOM normal.
  - **Shadow Host**: O nó DOM regular ao qual o Shadow DOM está anexado.
  - **Shadow Tree**: A árvore DOM dentro do Shadow DOM.
  - **Shadow Boundary**: O ponto onde o Shadow DOM termina e o DOM regular começa.
  - O Shadow DOM é uma parte dos Web Components.
- **Web Components**: Suíte de diferentes tecnologias que permitem a criação de elementos customizados reutilizáveis.
- **Elementos** são tags htmls simples e **Componentes** são um agrupamento de elementos om estilo e comportamento.

## TypeScript

> TypeScript é um superset do JavaScript desenvolvido pelo Microsoft

O TypeScript adiciona recursos avançados ao JavaScript, como tipagem estática (que permite detectar e prevenir erros durante a fase de desenvolvimento) e interfaces (que permitem definir contratos claros para objetos e classes).

### Instalação e Configuração

Instalação como dependência (de desenvolvimento):

```shell
npm i typescript -D
```

Conversão de TS para JS:

```shell
npx tsc src/index.ts
```

Configuração do TSConfig:

```shell
npx tsc --init
```

```json
...
"rootDir": "./src"
...
"outDir": "./build"
```

O que permite executar tsc seguindo o tsconfig.

```shell
npx tsc
```

## Ecossitema Angular

- Framework baseado em JavaScript;
- TypeScript como linguagem principal;
- Single Page Applications (SPAs) como foco;
- Componentes como base da arquitetura;
- Estrutura organizada e bem definida;
- Sistema de Tooling muito rico;

### Web APP - 4 Camadas

- **Componentes**: Elementos visuais, customizáveis e reutilizáveis que compõem a interface do usuário. Eles podem ter estados internos, receber dados de entrada e gerar eventos de saída.
- **Gerenciamento de Estado**: Forma como os dados são armazenados, atualizados e compartilhados entre os componentes. Ele pode ser local ou global.
- **Roteamento**: Forma como os componentes são associados a diferentes URLs da aplicação, permitindo a navegação entre eles sem recarregar a página.
- **Renderização**: Processo de transformar os componentes em elementos HTML que podem ser exibidos pelo navegador.

## Angular CLI

### Instalação

- NodeJS
- VSCode: Angular Language Service
- Angular: `npm install -g @angular/cli`
  - Para versão específica: `npm install -g @angular/cli@14`
  - Em caso de erro no Windows: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

### Utilização

- Criar um novo projeto:`ng new [name]`;
- Executar o projeto: `ng serve` ou `ng s`;
- Criar estruturas de código: `ng generate` ou `ng g`;
  - Componente (.component.html/.css/.ts/.spec.ts + declaração em app.module.ts): `ng generate component <nome>` ou `ng g c <nome>`

## Components

- **.component.ts**: Define o comportamento do componente. Ele contém a classe TypeScript que representa o componente.
  - O decorator `@Component()` é usado para marcar uma classe TypeScript como um componente Angular.
    - `selector` especifica o nome do seletor usado para identificar o componente.
    - `templateUrl` especifica o caminho para o arquivo HTML que contém o template do componente.  
    - `styleUrls` especifica um array de caminhos para os arquivos CSS que são usados para estilizar o componente.
    - `template`: O template do componente, diretamente no código TypeScript.
    - `style`: O estilo do componente, diretamente no código TypeScript.
- **.component.html**: Define a estrutura do componente. Ele contém o código HTML que é renderizado no navegador.
- **.component.css**: Define o estilo do componente. Ele contém as regras CSS que são usadas para estilizar o componente.
- `app.module.ts`: Define o módulo principal da aplicação. O arquivo deve importar todos os módulos que a aplicação usa. Ele também deve definir os componentes, serviços e pipes que a aplicação usa.

### Implementação de um Component

- Criar a lógica em `.component.ts`:

```typescript
  import { Component } from '@angular/core';

  @Component({
    selector: 'my-component'
  })

  export class Componente {}
  ```

- Criar a estrutura em `.component.html`:

```html
<div>
  ...
<div>
```

- Criar estilização em `.component.css`:

```css
div {
  ...
}
```

- Registrar em `app.module.ts`:

```typescript
import {Componente} from './components/example.component';
```

- Interpolação de Dados e Dynamic Data: Técnica de ligação de dados que permite exibir informações que podem mudar dinamicamente com base em variáveis ou propriedades. Chaves duplas distinguem entre o que é conteúdo estático e dinâmico.

.ts:

```typescript
export class MeuComponente {
  name:string = 'World'
}
```

.html:

```html
<h1>Hello, {{name}}!</h1>
```

- Dynamic Properties: Refere-se à capacidade de definir propriedades dinamicamente em elementos HTML

.ts:

```typescript
@Component({
  selector: 'sign-up-form',
  template: `
    <button type="submit" [disabled]="formIsInvalid">Submit</button>
  `,
})
export class SignUpForm {
  formIsInvalid = true;
}
```

O equivalente em .html:

```html
<button type="submit" disabled>Submit</button>
```

- Dynamic Attributes:  Refere-se à capacidade de adicionar ou remover atributos de elementos HTML com base em condições dinâmicas. Utiliza-se o prefixo com `[attr.]` para acrescentar um atributo personalizado, pois não faz parte das propriedades DOM padrão.

- Binding de Propriedade: Passagem de dados para de um componente pai para um componente filho.
  - O `@Input` é um decorador que permite que propriedades de um componente filho recebam valores de um componente pai. Ele define uma propriedade no componente filho que pode ser vinculada ao valor passado pelo componente pai.

```typescript
// Componente pai
import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  template: `
    <app-filho [texto]="textoDoPai"></app-filho>
  `,
})
export class PaiComponent {
  textoDoPai: string = 'Olá, mundo!';
}

// Componente filho
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  template: '<p>{{ texto }}</p>',
})
export class FilhoComponent {
  @Input() texto: string;
}
```

### Biding

- Interpolation: Usa `{{ }}` para exibir dados do componente na view.
  - `<p>Olá {{nome}}</p>`
- Property Binding: Usa `[ ]` para vincular uma propriedade de um elemento HTML a uma expressão ou variável do componente.
  - `<img [src]="urlImagem">`
- Event Binding: Usa `( )` para vincular um evento de um elemento HTML a um método do componente.
  - `<button (click)="salvar()">Salvar</button>`
- Two Way Data Binding: Usa `[( )]` para vincular os dados em ambas as direções, ou seja, da view para o componente e vice-versa.
  - `<input [(ngModel)]="email">`

### Ciclo de Vida

0. **constructor**
1. **ngOnChanges**: Executado quando uma propriedade vinculada a um input ou output é alterada. Pode ser executado várias vezes durante o ciclo de vida do componente.
2. **ngOnInit**: Executado uma vez após a criação do componente, após o primeiro **ngOnChanges**, para inicializar o componente.
3. **ngDoChek**: Executado a cada ciclo de detecção de mudanças do Angular. Ele é usado para verificar manualmente as mudanças que o Angular não detecta por si só.
4. **ngAfterContentInit**: Executado uma vez após o Angular projetar o conteúdo externo na view do componente.
5. **ngAfterContentChecked**: É  executado após o Angular verificar o conteúdo projetado. Ele pode ser executado várias vezes durante o ciclo de vida do componente.
6. **ngAfterViewInit**: É executado uma vez após o Angular inicializar a view do componente e suas views filhas. Ele é usado para manipular a view do componente.
7. **ngAfterViewChecked**: É executado após o Angular verificar a view do componente e suas views filhas. Ele pode ser executado várias vezes durante o ciclo de vida do componente.
8. **ngOnDestroy**: É executado uma vez antes do Angular destruir o componente. Ele é usado para liberar recursos, cancelar subscrições, etc.
