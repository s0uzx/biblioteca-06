import bookModel from "../models/bookModel.js";

class BookController {
  getAll = async (req, res) => {
    try {
      const books = await bookModel.getAll();
      res.json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar livro" });
      
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const livro = await bookModel.getById(Number(id));
      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado!" });
      }
      res.json(livro);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar livro" });
    }
  }

  createNewBook = async (req, res) => {
    const { title, author, publisher, isbn, category, year, description } = req.body;
    const livro = await bookModel.createNewBook(title, author, publisher, isbn, category, year, description);
    try {
      if (!title || !author || !publisher || !isbn || !category ) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
      }

      const livro = await bookModel.createNewBook(title, author, publisher, isbn, category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao adicionar livro" });
    }
  }

  

  update = async (req, res) => {
    const { id } = req.params;
    const { title, author, publisher, isbn, category, year, description } = req.body;

    try {
      const livro = await bookModel.update(Number(id), title, author, publisher, isbn, category, year, description);

      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      res.status(200).json(livro);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar livro" });
    }
  }

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await bookModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      res.status(200).send({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir livro!" });
    }
  };
}
export default new BookController();
