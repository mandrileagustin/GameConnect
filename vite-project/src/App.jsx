import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./Components/Layout/Layout";
import InicioDeSesion from "./views/InicioDeSesion/InicioDeSesion";
import DetallesUsuario from "./views/CompletarUsuario/CompletarUsuario";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<InicioDeSesion />} />
          <Route path="userDetails" element={<DetallesUsuario />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
