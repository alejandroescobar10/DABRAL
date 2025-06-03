import { DataSource } from "typeorm";
import { Libro } from "./entity/book";
import path from 'path';
const isProd = process.env.NODE_ENV === "production";
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: isProd
    ? '/tmp/db.sqlite' // ⚠️ No recomendado: sólo lectura temporal en Vercel
    : path.resolve(__dirname, 'db.sqlite'),
  synchronize: true,
  entities: [Libro],// ✅ asegúrate que Libro esté aquí
});
