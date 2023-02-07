import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user_routes.js";
import JuegosRouter from "./routes/products_routes.js";
import ImagenRouter from "./routes/imagen_routes.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Añadimos el método config de dotenv para utilizar las variables de entorno
dotenv.config();

export function currentDir() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return { __dirname, __filename };
}
// instanciamos express
const app = express();

// --- middlewares de express ---
app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cookieParser());

app.use(
  fileUpload({
    createParentPath: true,
    limits: { fieldSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Imagen demasiado grande",
    uploadTimeout: 0,
  })
);
//---api  midelware---
app.use("/user", userRouter);

//----api juegos-----
app.use("/juegos", JuegosRouter);

//---api imagenes---
app.use("/imagenes", ImagenRouter);

export default app;
