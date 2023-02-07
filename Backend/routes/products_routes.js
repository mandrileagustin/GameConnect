import express from "express";
import productsController from "../controller/juegos_controller.js";

const productsRouter = express.Router();

productsRouter.post("/addJuego", productsController.addJuego);

productsRouter.get("/juego/:id", productsController.getJuegoById);

productsRouter.get("/", productsController.getJuego);

productsRouter.get("/juegoName/:name", productsController.getJuegoByName);

export default productsRouter;
