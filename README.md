<h1 align="center">
  VUTTR API
</h1>

# Indice
- [Sobre](#-Sobre)
- [Tecnologias Utilizadas](#-tecnologias-Utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Rotas](#-rotas)
- [Documentação da API](#-documentacao-da-api)


## 🗒 Sobre



O **Vuttr API** é uma aplicação back-end para um 
aplicativo que é um repositório simples para gerenciamento de ferramentas com seus respectivos nomes, links, descrições e tags.  Essa API foi desenvolvida para o desafio da **BossaBox**.
g
---

## 🚀 Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/')
- [MongoDB](https://www.mongodb.com/')
- [Jest](https://jestjs.io/')
- [Express](https://expressjs.com/pt-br/')
- [Swagger](https://swagger.io/specification/')


## 📦 Como baixar o projeto

* NodeJS v12.16.1

```bash

  #Clonar o repositório
  $git clone https://github.com/limaantonio/VUTTR_back-end
  
  # Entrar no repositório
  $ cd VUTTR_back-end

  # Instalar as dependencias
  $ yarn ou npm install 

  # Inciar o projeto
  $ yarn start

```

## Rotas

```
  Todas as requisições do POST para está API devem ter o cabeçalho Content-Type: application/json.A API contém as seguintes rotas:
  
  Rotas Tool:
  
  * GET /tools: lista todas as tools cadastradas
  * GET /tools?tag="nome_tag": lista todas as tools de acordo com a tag informada 
  * POST /tool: cria uma nova tool
  * DELETE /tool:id :apaga uma tool de acordo com o id informado

  Documentação:
  * GET /doc: rota para visualizar a documentação da API
  
```

## Documentação da API
<a href="https://deploy-vuttr.herokuapp.com/doc/" />


Desenvolvido por Antonio Carlos
