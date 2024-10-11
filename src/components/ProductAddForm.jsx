import React from 'react'
import NavBarra from '../components/NavBarra';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/produtos";

const ProductAddForm = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Cliquei");
    if (!nome == "") {
      if (!categoria == "") {
        if (!preco == "") {
          console.log("entrei");
          const produto = { nome, categoria, preco };
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto),
          });
          alert("Produto cadastrado com sucesso");
          setNome("");
          setCategoria("");
          setPreco("");
        } else {
          setAlertaClass("mb-3");
          setAlertaMensagem("O campo preço não pode ser vazio.");
        }

      } else {
        setAlertaClass("mb-3");
        setAlertaMensagem("O campo categoria não pode ser vazio.");
      }
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo nome não pode ser vazio.");
    }
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '500px', backgroundColor: "#2e2e2e", borderRadius: '15px', marginTop: '50px' }}>
          <form onSubmit={handleSubmit} style={{margin: "15px"}}>
            <h2 style={{color: "#f8f8f8"}}>Cadastrar produto</h2>
            {/* caixinha do nome */}
            <FloatingLabel
              controlId="floatingInputName"
              label="Nome do produto"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </FloatingLabel>

            {/* caixinha da categoria */}
            <FloatingLabel
              controlId="floatingInputText"
              label="Categoria"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="name@example.com"
                value={categoria}
                onChange={(e) => {
                  setCategoria(e.target.value);
                }}
              />
            </FloatingLabel>

            {/* caixinha do preço */}
            <FloatingLabel
              controlId="floatingInputText"
              label="Preço"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Preço"
                value={preco}
                onChange={(e) => {
                  setPreco(e.target.value);
                }}
              />
            </FloatingLabel>



            <Alert key="danger" variant="danger" className={alertaClass}>
              {alertaMensagem}
            </Alert>

            <Button variant="primary" type="submit" style={{ backgroundColor: "green", marginBottom: "10px" }}>
              Cadastrar produto
            </Button>
          </form>
        </div>
      </div>
  )
}

export default ProductAddForm