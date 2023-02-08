import InicioDeSesionTitulo from "../../Components/InicioSesion/InicioSesionTitulo";
import Login from "../../Components/Login/Login";
import Registro from "../../Components/Registro/Registro";
import NombreProyecto from "../../Components/NombreProyecto/NombreProyecto";
export default function InicioDeSesion() {
  return (
    <div>
      <div>
        <InicioDeSesionTitulo />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Registro />
      </div>
      <div>
        <NombreProyecto />
      </div>
    </div>
  );
}
