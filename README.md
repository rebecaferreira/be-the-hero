<p align="center">
  <img src=/frontend/src/assets/logo.svg/>
</p>

A Semana Omnistack é um workshop online produzido pela Rocketseat.
Nesse workshop aprendi a desenvolver uma aplicação chamada Be The Hero, desde o backend até o frontend web e mobile, com uma única linguagem, o Javascript.
O aplicativo consiste em uma plataforma para ONGs se cadastrarem, e cadastrarem os casos (incidentes) em que precisam de ajuda.

## Instalação
Após o git clone, realizar os comandos:
```bash
npm install

npm start
```
## Projeto
O back-end foi desenvolvido em NodeJS com acesso a banco de dados SQLite. Esta api faz uso do Knex.

As rotas para acessar a API estão no arquivo routes.js. 

## Front-End (Web e Mobile)
O front-end web foi desenvolvido em ReactJS.
A página da aplicação Be The Hero será aberta. Nela, uma ONG poderá se cadastrar e cadastrar seus incidentes. A ONG também poderá entrar em contato com outras ONGs para poder ajudar nos incidentes delas.

### Versão Web
Página de Login do Site:

![](/frontend/public/login.jpg)

Página de casos cadastrados pela ONG:

![](/frontend/public/lista-web.jpg)

Página de cadastro de novos casos:

![](/frontend/public/cadastro.jpg)

### Versão Mobile:

A versão mobile foi feita com React Native e Expo.

Página de inicialização (Splash Screen):

![](/frontend/public/landing.jpg)

Página inicial (listagem de casos):

![](/frontend/public/lista.jpg)

Página de detalhes & contato:

![](/frontend/public/ong.jpg)
