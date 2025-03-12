# Atenção
Este repositório é um fork do repositório de mesmo nome disponível na documentação do Cypress.  
Os passos abaixo são padrão para a instalação do repositório original.  
Neste os pacotes npm já estão instalados.  
Abaixo das instruções padrões há os cenários de testes que crie para meu estudo, além de bug reports.s

# Cypress Heroes Demo Application

This is a demo application that shows how to use Cypress to run end-to-end,
component, and API tests against an application.

## Getting Started

The app is a mono repo that uses npm workspaces. Once you clone the project,
install the dependencies at the root folder:

```sh
npm install
```

After that a few more things need to be set up (databases and such), to do so run:

```sh
npm run setup
```


To launch the app for development, run:

```sh
npm run dev
```

This will start both the client and server apps in dev mode. The site will be
available at http://localhost:3000.

## App Overview

The Cypress Heroes app consists of a frontend client app written in React that
uses Vite, as well as a backend app that uses NestJS.

### React Client App

The React client app is located in the **client** folder. It is a standard React [Vite](https://vitejs.dev/) app.

Todo: fill out

### NestJS Server App

The server app is in the **server** folder. It is built with the [NestJS](https://nestjs.com/) Node.js framework. It uses [Prisma](https://www.prisma.io/) for the database ORM.

#### Database seeding and resetting

The database is seeded from the **server/prisma/seed.ts** script when you set up the app. If at any time you want to reset the database back to its initial state, run:

```sh
npm run resetdb
```

## Environment Variables

The client app uses an environment variable to know what the URL is for the
backend api named `VITE_API_URL`. It defaults to "http://localhost:3001" for use
in dev mode, and should be overriden in other environments/modes.

## How to execute cypress?

into de paste client 

```sh
npx cypress open
```

<<<<<<< HEAD
## Test Case by ME
=======
## Test Case by MIM
>>>>>>> 8ada695 (readme)

**Supondo que a regra de negócio é a seguinte:**

Eu como usuário quero logar na minha conta do MyHeroe  
e contratar o herói com o super poder que 
mais me agrada.

**Requisitos:**  
* Logar com usuario valido  
* Visualizar todas as opçõe de herois  
* Opção de curtir ou descurtir um heroi  
* Ao curtir um heroi deve aumentar em +1 o numero de fans
* Botão de contratar um herói  
* Ao contratar um herói deve aparecer modal para confirmar ou nao a compra
* Se a compra for realizada apresentar uma mensagem "Compra realizada com sucesso"  
* Ao contratar o número de saves do heroi deve aumentar em +1

Cenários de teste:

1- Login usuário inválido  
2- Login usuário válido   
3- contratar um herói  
4- descontratar um herói  
5- curtir um fã  
6- descurtir um fã  

## Exemplo Teste Case

|    Título   | Logando com email e senha válida|  
|-------------|---------------------------------|
|Pré condição | usuário cadastrado|
|Passo-a-passo| Inserir usuário válido/Inserir senha válida/ Clicar em login|  
|Resultado esperando| Usuário loga com sucesso e é redirecionado para a página inicial|  
|Suite de Teste| Login |  
|Ambiente de teste| Chrome|
|Resultado Encontrado| O mesmo que o esperado|
|Status| Passou|



## Exemplo Bug report 

|Título|contratar um herói|
|------|------------------|
|Passos para reprodução| 1 clicar no botão com o cifrão 2 Clicar no botão sim no modal de confirmação 
|Resultado esperado| Mensagem de confirmação da contratação realizada|
|Resultado encontrado| Após confirmação da compra, não é exibida mensagem de compra realizada com sucesso|
|Ambiente de testes| Dev|
|Prioridade|Baixa|
|Tipo |Funcional|
|Evidência|[print]|
