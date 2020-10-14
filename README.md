<p align="center">
  <img src=/frontend/src/assets/logo.svg/>
</p>

<p align="center"><a aria-label="Completed" href="">
    <img src="https://img.shields.io/badge/Be The Hero-Semana Omnistack 11.0-cc1620?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a></p>

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
