// Importa o cliente Prisma para interagir com o banco de dados
import prisma from "../../prisma/client.js";

class BookModel {
  // Método para buscar todos os livros no banco de dados
  getAll = async () => {
    try {
      return await prisma.book.findMany(); // Retorna todos os registros da tabela "book"
    } catch (error) {
      console.log("Erro ao buscar livros:", error);
      throw error; // Lança o erro para ser tratado no controlador
    }
  };

  // Método para buscar um livro específico pelo ID
  getById = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id }, // Busca o livro com o ID fornecido
      });
      return livro; // Retorna o livro encontrado ou null se não existir
    } catch (error) {
      console.log("Erro ao buscar livro:", error);
      throw error;
    }
  };

  // Método para criar um novo livro no banco de dados
  createNewBook = async (title, author, publisher, isbn, category, year, description) => {
    try {
      return await prisma.book.create({
        data: {
          title,       // Título do livro
          author,      // Autor do livro
          publisher,   // Editora do livro
          isbn,        // ISBN do livro
          category,    // Categoria do livro
          year,        // Ano de publicação
          description, // Descrição do livro
        },
      });
    } catch (error) {
      console.log("Erro ao criar livro:", error);
      throw error;
    }
  };

  // Método para atualizar um livro existente pelo ID
  update = async (id, title, author, publisher, isbn, category, year, description) => {
    try {
      const livro = await prisma.book.update({
        where: { id }, // Identifica o livro pelo ID
        data: {
          title,       // Atualiza o título
          author,      // Atualiza o autor
          publisher,   // Atualiza a editora
          isbn,        // Atualiza o ISBN
          category,    // Atualiza a categoria
          year,        // Atualiza o ano de publicação
          description, // Atualiza a descrição
        },
      });

      return livro; // Retorna o livro atualizado
    } catch (error) {
      console.log("Erro ao atualizar livro:", error);
      throw error;
    }
  };

  // Método para deletar um livro pelo ID
  delete = async (id) => {
    try {
      const livroDeletado = await prisma.book.delete({
        where: { id }, // Identifica o livro pelo ID
      });

      return livroDeletado; // Retorna o livro deletado
    } catch (error) {
      console.log("Erro ao deletar livro:", error);
      throw error;
    }
  };

  // Método para buscar a data de criação de um livro pelo ID
  createdAt = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id }, // Identifica o livro pelo ID
        select: { createdAt: true }, // Retorna apenas o campo "createdAt"
      });

      if (!livro) {
        throw new Error("Livro não encontrado"); // Lança erro se o livro não existir
      }

      return livro.createdAt; // Retorna a data de criação
    } catch (error) {
      console.log("Erro ao buscar data de criação do livro:", error);
      throw error;
    }
  };

  // Método para buscar a data de atualização de um livro pelo ID
  updatedAt = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id }, // Identifica o livro pelo ID
        select: { updatedAt: true }, // Retorna apenas o campo "updatedAt"
      });

      if (!livro) {
        throw new Error("Livro não encontrado"); // Lança erro se o livro não existir
      }

      return livro.updatedAt; // Retorna a data de atualização
    } catch (error) {
      console.log("Erro ao buscar data de atualização do livro:", error);
      throw error;
    }
  };
}

// Exporta uma instância da classe BookModel para ser usada em outros arquivos
export default new BookModel();