import userQueris from "./mysql_queris/user_queris.js";
import productQueris from "./mysql_queris/juegos_queris.js";
import imagenQueris from "./mysql_queris/imagen_queris.js";

const dao = {};
///Usuarios
dao.getUserByEmail = async (email) => await userQueris.getUserByEmail(email);

dao.addUser = async (userData) => await userQueris.addUser(userData);

dao.getUserById = async (id) => await userQueris.getUserById(id);

dao.deleteUser = async (id) => await userQueris.deleteUser(id);

dao.updateUser = async (id, userData) =>
  await userQueris.updateUser(id, userData);

///Imagenes
dao.addImage = async (imageData) => await imagenQueris.addImage(imageData);

dao.getImageById = async (id) => await imagenQueris.getImageById(id);

dao.deleteImage = async (id) => await imagenQueris.deleteImage(id);

///Juegos
dao.addJuego = async (juegoData) => await productQueris.addJuego(juegoData);

dao.getJuegoById = async (id) => await productQueris.getJuegoById(id);

dao.getJuego = async () => await productQueris.getJuego();

dao.getJuegoByName = async (name) => await productQueris.getJuegoByName(name);

export default dao;
