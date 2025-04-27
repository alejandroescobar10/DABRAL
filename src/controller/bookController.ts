// src/controllers/bookController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Libro } from "../entity/book";

const libroRepository = AppDataSource.getRepository(Libro);

export const crearLibro = async (req: Request, res: Response) => {
  const book = libroRepository.create(req.body);
  await libroRepository.save(book);
  res.status(201).json(book);
};

export const obtenerLibros = async (_: Request, res: Response) => {
  const books = await libroRepository.find();
  res.json(books);
};

export const actualizarLibro = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).send("Invalid ID");
    return;
  }

  const book = await libroRepository.findOneBy({ id });
  if (!book) {
    res.status(404).send("Book not found");
    return;
  }

  libroRepository.merge(book, req.body);
  const result = await libroRepository.save(book);
  res.json(result);
};

export const eliminarLibro = async (req: Request, res: Response) => {
  const result = await libroRepository.delete(req.params.id);
  res.json(result);
};
