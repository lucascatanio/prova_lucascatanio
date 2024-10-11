import React from 'react'
import NavBarra from '../components/NavBarra';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

const url = "http://localhost:5000/produtos";

const ProductsListComp = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const prods = await res.json();
        setProdutos(prods);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    console.log(produtos);
  }, []);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '60%', backgroundColor: "#2e2e2e", borderRadius: '15px', marginTop: '50px' }}>
          <h2 style={{color: "#f8f8ff"}}>Produtos cadastrados</h2>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.nome}</td>
                  <td>{prod.categoria}</td>
                  <td>{prod.preco}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={async () => {
                        const res = await fetch(`http://localhost:5000/produtos/${prod.id}`, {
                          method: "DELETE",
                          headers: { "Content-Type": "application/json" },
                        });
                        const funcionarioRemovido = await res.json()
                        alert(`O produto ${funcionarioRemovido.nome} foi excluido`)
                        window.location.reload()
                      }}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default ProductsListComp