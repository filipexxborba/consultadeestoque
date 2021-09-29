import React from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import "./Input.css";

const Input = () => {
  const { currentMethod } = React.useContext(GlobalContext);
  const [codigo, setCodigo] = React.useState("");

//   Se estiver selecionado o código de produto, chamar a API de código.
  if(currentMethod === false){
      
  }

  return (
    <div className="container">
      <input
        type="number"
        value={codigo}
        onChange={(event) => setCodigo(event.target.value)}
        placeholder={
          currentMethod
            ? "Insira o código de barras"
            : "Insira o código do produto"
        }
      ></input>
    </div>
  );
};

export default Input;
