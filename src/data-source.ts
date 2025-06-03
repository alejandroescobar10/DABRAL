import { DataSource } from "typeorm";
import { Libro } from "./entity/book";
const isProd = process.env.NODE_ENV === "production";
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: true,
  entities: [Libro], // ✅ asegúrate que Libro esté aquí
});
