import { Router } from "express";
import { crearLibro, obtenerLibros, actualizarLibro, eliminarLibro } from "../controller/bookController";

const router = Router();

router.post("/createBook", crearLibro);
router.get("/getBooks", obtenerLibros);
router.put("/updateBook/:id", actualizarLibro);
router.delete("/deleteBook/:id", eliminarLibro);

export default router;