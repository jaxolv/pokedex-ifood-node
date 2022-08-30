import express from "express";
import db from "./database"
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.initializeDatabase()
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  async initializeDatabase() {
    try {
      await db.authenticate();
      console.log("Conexão com o banco de dados deu bom")
    } catch (error) {
      console.log("Deu ruim: ", error.message)
    }
  }
}

export default new App().server;
