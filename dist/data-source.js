"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const book_1 = require("./entity/book");
const path_1 = __importDefault(require("path"));
const isProd = process.env.NODE_ENV === "production";
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: isProd
        ? '/tmp/db.sqlite' // ⚠️ No recomendado: sólo lectura temporal en Vercel
        : path_1.default.resolve(__dirname, 'db.sqlite'),
    synchronize: true,
    entities: [book_1.Libro], // ✅ asegúrate que Libro esté aquí
});
