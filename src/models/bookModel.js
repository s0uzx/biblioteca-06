import prisma from "../../prisma/client.js";

class BookModel {
  getAll = async () => {
    try {
      return await prisma.book.findMany();
    } catch (error) {
      console.log("Erro ao buscar livros", error);
      throw error;
    }
  };
  getById = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id },
      });
      return livro;
    }
    catch (error) {
      console.log("Erro ao encontrar livro", error);
      throw error;
    }
  }

  
    createNewBook = async (title, author, publisher, isbn, category, year, description) => {
      return await prisma.book.create({
        data: {
          title,
          author,
          publisher,
          isbn,
          category,
          year,
          description,
        },
      });
    };

  update = async (id, title, author, publisher, isbn, category) => {
    try {
      const livro = await prisma.book.update({
        where: { id },
        data: {
          title,
          author,
          publisher,
          isbn,
          category,
        },
      });

      return livro;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const livroDeletado = await prisma.book.delete({
        where: { id },
      });


      return livroDeletado;
    } catch (error) {
      console.log("Erro ao deletar a livro!", error);
      throw error;
    }
    z
  };

  createdAt = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id },
      });
      return livro.createdAt;
    } catch (error) {
      console.log("Erro ao encontrar livro", error);
      throw error;
    }
  };
  
  updatedAt = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id },
      });
      return livro.updatedAt;
    } catch (error) {
      console.log("Erro ao encontrar livro", error);
      throw error;
    }
  };
}
export default new BookModel();
