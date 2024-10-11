import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email == "admin" && senha == "4321") {
      navigate("/products-list")
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("Usuário ou senha inválidos.");
    }
  }
  return (
    <div style={{ width: '500px', backgroundColor: "#2e2e2e", borderRadius: '15px' }}>
        <form onSubmit={handleLogin} style={{ margin: "15px" }}>
          {/* caixinha do email */}
          <h2 style={{ color: "#f8f8ff" }}>Gestão de estoque</h2>
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha da senha */}
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-3 lg"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          >
            <Form.Control
              type="password"
              placeholder="Password"

            />
          </FloatingLabel>

          <Button type="submit" style={{ backgroundColor: "black", marginBottom: "10px" }}>
            Login
          </Button>
          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>

        </form>
      </div>
  )
}

export default LoginForm