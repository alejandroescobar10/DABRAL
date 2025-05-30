import { DataSource } from "typeorm";
import { Libro } from "./entity/book";
const isProd = process.env.NODE_ENV === "production";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "nwezqzsvkzauovpmlsyv.supabase.co",           // ej: db.xxxxxx.supabase.co
  port: 5432,
  username: "postgres",    // usualmente: postgres
  password: "zaq12345",
  database: "backendLibros",   // el nombre del proyecto Supabase
  synchronize: true,
  logging: false,
  entities: isProd ? ["dist/entity/*.js"] : [Libro],
  migrations: [],
  subscribers: [],
});
