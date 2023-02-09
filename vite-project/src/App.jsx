import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./Components/Layout/Layout";
import InicioDeSesion from "./views/InicioDeSesion/InicioDeSesion";
import DetallesUsuario from "./views/CompletarUsuario/CompletarUsuario";
import { Roles } from "./components/Roles/Roles";
import RutasPublicas from "./Components/PublicRoutes/PublicRoutes";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import ChatService from "./views/Chat/SignUpToChat";
import socketIO from "socket.io-client";
import ChatPage from "./views/Chat/Chat";
const socket = socketIO.connect("http://127.0.0.1:4000");

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/signUp"
            element={<ChatService socket={socket} />}
          ></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
          <Route element={<RutasPublicas />}>
            <Route path="login" element={<InicioDeSesion />} />
          </Route>
          <Route element={<PrivateRoutes allowedRoles={[Roles.User]} />}>
            <Route path="userDetails" element={<DetallesUsuario />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
