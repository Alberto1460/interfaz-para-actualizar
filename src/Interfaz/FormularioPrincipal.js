import React from "react";
import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

function FormularioPrincipal() {
  const [gridBackground, setGridBackground] = useState("#3fc992");
  const [showReferences, setShowReferences] = useState(false);

  const handleShowButtonClick = () => {
    setGridBackground("#fff68f");
    setShowReferences(true);
  };

  return (
    <div className="grid-container">
      <div className="left">
        <h1>Sistema para la generación de Referencias Bancarias</h1>
        <div className="dropdowns-container">
          <label htmlFor="mes">Mes:</label>
          <select name="mes" id="mes">
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
          </select>
          <label htmlFor="año">Año:</label>
          <select name="año" id="año">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <label htmlFor="grupo">Grupo de Destinatarios:</label>
          <select name="grupo" id="grupo">
            <option value="grupo1">Grupo 1</option>
            <option value="grupo2">Grupo 2</option>
            <option value="grupo3">Grupo 3</option>
          </select>
          <label htmlFor="tipo">Tipo de Referencia:</label>
          <select name="tipo" id="tipo">
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
            <option value="tipo3">Tipo 3</option>
          </select>
        </div>
        <div className="button-container">
          <Link to="./abarca">
            <button
              className="send-button"
              onClick={() => setGridBackground("#8cff7a")}
              style={{
                backgroundColor: showReferences ? "#8cff7a" : "#9accc3",
              }}
            >
              Enviar
            </button>
          </Link>
        </div>
      </div>
      <div className="right" style={{ backgroundColor: gridBackground }}>
        <h1>Referencias encontradas</h1>
      </div>
    </div>
  );
}

export default FormularioPrincipal;