"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        'frontend-libros-89k8w4z6t-alejandro-escobar-ms-projects.vercel.app',
        'https://frontend-libros-one.vercel.app',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use('/books', bookRoutes_1.default);
// Inicializar la conexión con la base de datos
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Conexión a la base de datos exitosa");
    // Iniciar el servidor
    app.listen(5000, () => {
        console.log("Servidor corriendo en http://localhost:5000");
    });
})
    .catch((error) => console.error("Error al conectar a la base de datos:", error));
exports.default = app;
