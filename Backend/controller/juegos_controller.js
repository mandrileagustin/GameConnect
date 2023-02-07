import { currentDir } from "../index.js";
import dao from "../services/dao.js";
import { jwtVerify } from "jose";

const controller = {};
const __dirname = currentDir().__dirname;

controller.addJuego = async (req, res) => {
  const { nombre, genero, plataforma } = req.body;

  if (!nombre || !genero || !plataforma)
    return res.status(400).send("Error al recibir el body");

  const addProduct = await dao.addProduct(req.body);
  if (addProduct) {
    return res.sendStatus(200);
  } else {
    return Error;
  }
};

controller.getJuegoById = async (req, res) => {
  try {
    // Buscamos si el id de la imagen existe en la base de datos
    const juego = await dao.getJuegoById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (juego.length <= 0) return res.status(404).send("el producto no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(juego[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getJuego = async (req, res) => {
  try {
    const product = await dao.getProduct();
    // Si no existe devolvemos un 404 (not found)
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(product);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getJuegoByName = async (req, res) => {
  // Buscamos si el id de la imagen existe en la base de datos
  const name = req.params.name;
  if (!name) {
    return res.status(400).send("Error al recibir el body");
  }
  try {
    let product = await dao.getJuegoByName(name);

    // Si no existe devolvemos un 404 (not found)
    if (product.length <= 0)
      return res.status(404).send("el producto no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(product);
  } catch (e) {
    console.log(e.message);
  }
};
export default controller;
