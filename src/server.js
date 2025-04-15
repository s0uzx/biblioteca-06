import express from "express";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
const port = 4000;

// Configuração para interpretar JSON
app.use(express.json());

// Rotas
app.use("/books", bookRoutes);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});