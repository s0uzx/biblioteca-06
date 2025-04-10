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

  create = async (req, res) => {
    const { descricao } = req.body;
    // const descricao = req.body.descricao;
    try {
      if (!descricao) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      const novoLivro = await bookModel.create(descricao);
      res.status(201).json(novaTarefa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao adicionar livro" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluido, descricao } = req.body;

    try {
      const livroAtualizado = await bookModel.update(
        Number(id),
        concluido,
        descricao
      );

      if (!livroAtualizado) {
        return res.status(404).json({ erro: "Livro não encontrada!" });
      }

      res.json(livroAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar livro!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await bookModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Livro não encontrada" });
      }

      res.status(200).send({ message: "Livro deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir livro!" });
    }
  };
}
export default new BookController();
