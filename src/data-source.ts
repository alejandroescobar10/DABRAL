import "reflect-metadata";
import { DataSource } from "typeorm";
import { Libro } from "./entity/book"; // Asegúrate de que la ruta sea correcta

export const AppDataSource = new DataSource({
  synchronize: true, // Sincroniza automáticamente las entidades con la base de datos (solo para desarrollo)
  logging: false, // Cambia a true si necesitas ver las consultas SQL en la consola
  type: "sqlite", // Tipo de base de datos
  database: "database.sqlite", // Nombre del archivo de la base de datos
  entities: [Libro], // Lista de entidades
  subscribers: [], // Lista de suscriptores (si los usas)
  migrations: [], // Lista de migraciones (si las usas)
});