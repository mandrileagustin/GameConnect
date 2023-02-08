import { currentDir } from "../index.js";
import dao from "../services/dao.js";
// import { jwtVerify } from "jose";

const controller = {};
const __dirname = currentDir().__dirname;

controller.addPost = async (req, res) => {
  const { comentario } = req.body;

  if (!comentario) return res.status(400).send("Error al recibir el body");

  const addPost = await dao.addPost(req.body);
  if (addPost) {
    return res.sendStatus(200);
  } else {
    return Error;
  }
};

controller.getPostId = async (req, res) => {
  try {
    // Buscamos si el id de la imagen existe en la base de datos
    const post = await dao.getPostById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (post.length <= 0) return res.status(404).send("el producto no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(post[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getPost = async (req, res) => {
  try {
    const post = await dao.getPost();
    // Si no existe devolvemos un 404 (not found)
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(post);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getPostByName = async (req, res) => {
  // Buscamos si el id de la imagen existe en la base de datos
  const name = req.params.name;
  if (!name) {
    return res.status(400).send("Error al recibir el body");
  }
  try {
    let post = await dao.getPostByName(name);

    // Si no existe devolvemos un 404 (not found)
    if (post.length <= 0) return res.status(404).send("el producto no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(post);
  } catch (e) {
    console.log(e.message);
  }
};
export default controller;
