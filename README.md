# Projeto
Esse app é do livro Pro Angular - Aplicação exemplo 

--> Criar a classe principal "TodoItem" na raiz da aplicação
  --> Criar um construtor passando uma variavel string e uma boolean(default:false) - ambas Public

--> Criar uma classe chamada "todoList" que irá representar uma lista de items pendentes
  --> Essa classe deverá utilizar a classe "TodoItem" (import) 
  --> Criar um constutor passando os seguintes parâmetros:
      . Usuário (publico do tipo String)
      . Um array da classe de item (privado do tipo array com valor default vazio)
  --> Criar um método para retornar os itens do array criado do tipo somente leitura
  --> Criar um método para adicionar um item no array criado passando uma string
  --> Alterar o conteúdo do HTML mostrando o usuario<h3> e dentro a quantidade de itens <h6> 
  --> No app component fazer:
      . Criar um atributo que contenha uma lista usuario (Bob) privada com 4 itens(array):
        1. "Correr as 17 horas" - true
        2. "Pegar Flores na Floricultura" 
        3. "Comprar pão na Padaria" - true
      . Método para Capturar usuario da lista criada anteriormente
      . Crir um método para retornar a quantidade de itens da lista criada com status completo (true) - filtrar 


  





# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
