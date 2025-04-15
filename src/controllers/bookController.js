// Importa o modelo de livros, que contém os métodos para interagir com o banco de dados
import bookModel from "../models/bookModel.js";

class BookController {
  // Método para buscar todos os livros
  getAll = async (req, res) => {
    try {
      // Chama o método do modelo para buscar todos os livros
      const books = await bookModel.getAll();
      // Retorna os livros encontrados com status 200 (OK)
      res.status(200).json(books);
    } catch (error) {
      // Loga o erro no console e retorna status 500 (Erro interno do servidor)
      console.error("Erro ao buscar livros:", error);
      res.status(500).json({ erro: "Erro ao buscar livros" });
    }
  };

  // Método para buscar um livro específico pelo ID
  getById = async (req, res) => {
    const { id } = req.params; // Obtém o ID dos parâmetros da requisição
    try {
      // Chama o método do modelo para buscar o livro pelo ID
      const livro = await bookModel.getById(Number(id));
      if (!livro) {
        // Retorna status 404 (Não encontrado) se o livro não existir
        return res.status(404).json({ erro: "Livro não encontrado!" });
      }
      // Retorna o livro encontrado com status 200 (OK)
      res.status(200).json(livro);
    } catch (error) {
      // Loga o erro no console e retorna status 500 (Erro interno do servidor)
      console.error("Erro ao buscar livro:", error);
      res.status(500).json({ erro: "Erro ao buscar livro" });
    }
  };

  // Método para criar um novo livro
  createNewBook = async (req, res) => {
    // Obtém os dados do corpo da requisição
    const { title, author, publisher, isbn, category, year, description } = req.body;

    // Validação de campos obrigatórios
    if (!title || !author || !publisher || !isbn || !category) {
      // Retorna status 400 (Requisição inválida) se algum campo obrigatório estiver ausente
      return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos" });
    }

    try {
      // Chama o método do modelo para criar um novo livro
      const livro = await bookModel.createNewBook(title, author, publisher, isbn, category, year, description);
      // Retorna o livro criado com status 201 (Criado)
      res.status(201).json(livro);
    } catch (error) {
      // Loga o erro no console e retorna status 500 (Erro interno do servidor)
      console.error("Erro ao adicionar livro:", error);
      res.status(500).json({ erro: "Erro ao adicionar livro" });
    }
  };

  // Método para atualizar um livro existente pelo ID
  update = async (req, res) => {
    const { id } = req.params; // Obtém o ID dos parâmetros da requisição
    // Obtém os dados do corpo da requisição
    const { title, author, publisher, isbn, category, year, description } = req.body;

    try {
      // Chama o método do modelo para atualizar o livro pelo ID
      const livro = await bookModel.update(Number(id), title, author, publisher, isbn, category, year, description);

      if (!livro) {
        // Retorna status 404 (Não encontrado) se o livro não existir
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      // Retorna o livro atualizado com status 200 (OK)
      res.status(200).json(livro);
    } catch (error) {
      // Loga o erro no console e retorna status 500 (Erro interno do servidor)
      console.error("Erro ao atualizar livro:", error);
      res.status(500).json({ erro: "Erro ao atualizar livro" });
    }
  };

  // Método para deletar um livro pelo ID
  delete = async (req, res) => {
    const { id } = req.params; // Obtém o ID dos parâmetros da requisição

    try {
      // Chama o método do modelo para deletar o livro pelo ID
      const sucesso = await bookModel.delete(Number(id));

      if (!sucesso) {
        // Retorna status 404 (Não encontrado) se o livro não existir
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      // Retorna uma mensagem de sucesso com status 200 (OK)
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      // Loga o erro no console e retorna status 500 (Erro interno do servidor)
      console.error("Erro ao excluir livro:", error);
      res.status(500).json({ erro: "Erro ao excluir livro!" });
    }
  };
}

// Exporta uma instância da classe BookController para ser usada nas rotas
export default new BookController();