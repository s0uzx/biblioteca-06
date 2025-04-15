// Importa o módulo express para criar o roteador
import express from "express";

// Importa o controlador de livros, que contém as funções para manipular as requisições
import bookController from "../controllers/bookController.js";

// Cria uma instância do roteador do Express
const router = express.Router();

// Define a rota para obter todos os livros (GET /books)
router.get("/", bookController.getAll);

// Define a rota para obter um livro específico pelo ID (GET /books/:id)
router.get("/:id", bookController.getById);

// Define a rota para criar um novo livro (POST /books)
router.post("/", bookController.createNewBook);

// Define a rota para atualizar um livro existente pelo ID (PUT /books/:id)
router.put("/:id", bookController.update);

// Define a rota para deletar um livro pelo ID (DELETE /books/:id)
router.delete("/:id", bookController.delete);

// Exporta o roteador para ser usado no servidor principal
export default router;