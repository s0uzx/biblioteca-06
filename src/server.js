import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/tarefas", bookRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
