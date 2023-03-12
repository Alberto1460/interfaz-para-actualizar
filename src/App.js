import { Routes, Route } from "react-router-dom"
import Formulario from "./Interfaz/Formulario";

function App() {

  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="abarca" element={ <Formulario /> } />
      </Routes>
    </div>
  );
}

export default App;