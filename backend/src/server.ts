import app from "./app";
import { AppDataSource } from "./data-source";
import dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.");

    await AppDataSource.runMigrations();

    const PORT = process.env.RUN_PORT ?? 3000;

    app.listen(PORT, () => {
      console.log(`App running!\nhttp://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
