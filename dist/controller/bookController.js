"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarLibro = exports.actualizarLibro = exports.obtenerLibros = exports.crearLibro = void 0;
const data_source_1 = require("../data-source");
const book_1 = require("../entity/book");
const libroRepository = data_source_1.AppDataSource.getRepository(book_1.Libro);
const crearLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = libroRepository.create(req.body);
    yield libroRepository.save(book);
    res.status(201).json(book);
});
exports.crearLibro = crearLibro;
const obtenerLibros = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield libroRepository.find();
    res.json(books);
});
exports.obtenerLibros = obtenerLibros;
const actualizarLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).send("Invalid ID");
        return;
    }
    const book = yield libroRepository.findOneBy({ id });
    if (!book) {
        res.status(404).send("Book not found");
        return;
    }
    libroRepository.merge(book, req.body);
    const result = yield libroRepository.save(book);
    res.json(result);
});
exports.actualizarLibro = actualizarLibro;
const eliminarLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield libroRepository.delete(req.params.id);
    res.json(result);
});
exports.eliminarLibro = eliminarLibro;
