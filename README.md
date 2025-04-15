# Biblioteca API

Este projeto é uma API para gerenciar uma biblioteca, permitindo operações CRUD (Create, Read, Update, Delete) em livros.

## **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/biblioteca-api.git

2.  Acesse o diretório do projeto:
cd biblioteca-api

3. Instale as dependências:
npm install

4. Configure as variáveis de ambiente:
-Crie um arquivo .env na raiz do projeto com base no arquivo .env.example.

5. Execute as migrações do banco de dados (se estiver usando Prisma):
npx prisma migrate dev

6. Inicie o servidor
npm start

O servidor estará rodando em http://localhost:4000.


Endpoints
1. Listar todos os livros
Rota: GET /books
Exemplo de resposta:
[
  {
    "id": 1,
    "title": "Livro Exemplo",
    "author": "Autor Exemplo",
    "publisher": "Editora Exemplo",
    "isbn": "123456789",
    "category": "Ficção",
    "year": 2021,
    "description": "Descrição do livro"
  }
]

2.Buscar um livro pelo ID
Rota: GET /books/:id
Exemplo de resposta:
{
  "id": 1,
  "title": "Livro Exemplo",
  "author": "Autor Exemplo",
  "publisher": "Editora Exemplo",
  "isbn": "123456789",
  "category": "Ficção",
  "year": 2021,
  "description": "Descrição do livro"
}

3. Criar um novo livro
Rota: POST /books
Exemplo de corpo da requisição:
{
  "title": "Novo Livro",
  "author": "Novo Autor",
  "publisher": "Nova Editora",
  "isbn": "987654321",
  "category": "Não-ficção",
  "year": 2022,
  "description": "Descrição do novo livro"
}
Exemplo de resposta:
{
  "id": 2,
  "title": "Novo Livro",
  "author": "Novo Autor",
  "publisher": "Nova Editora",
  "isbn": "987654321",
  "category": "Não-ficção",
  "year": 2022,
  "description": "Descrição do novo livro"
}

4. Atualizar um livro existente
Rota: PUT /books/:id
Exemplo de corpo da requisição:
{
  "title": "Livro Atualizado",
  "author": "Autor Atualizado",
  "publisher": "Editora Atualizada",
  "isbn": "123456789",
  "category": "Ficção",
  "year": 2021,
  "description": "Descrição do livro atualizado"
}   
Exemplo de resposta:
{
  "id": 1,
  "title": "Livro Atualizado",
  "author": "Autor Atualizado",
  "publisher": "Editora Atualizada",
  "isbn": "123456789",
  "category": "Ficção",
  "year": 2021,
  "description": "Descrição do livro atualizado"
}

5. Deletar um livro
Rota: DELETE /books/:id
Exemplo de requisição:
{
  "message": "Livro deletado com sucesso"
}

## **Decisões de Design e Arquitetura**
#Estrutura MVC: O projeto segue o padrão Model-View-Controller para organizar o código.
#Prisma ORM: Utilizado para interagir com o banco de dados de forma eficiente e segura.
#Express.js: Framework utilizado para criar a API de forma rápida e modular.
#Tratamento de Erros: Implementado tratamento de erros em cada camada para garantir respostas consistentes.
#Tecnologias Utilizadas
#Node.js: Ambiente de execução para JavaScript.
#Express.js: Framework para criação de APIs.
#Prisma: ORM para gerenciamento do banco de dados.
SQLite: banco de dados configurado no Prisma.
