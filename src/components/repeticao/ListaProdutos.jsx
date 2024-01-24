import React from "react";
import produto from "../../data/produto";
import "./listaProdutos.css";

export default function ListaProdutos(props) {
  const tabelaProduto = produto.map((item, i) => {
    return (
      <tr className={i % 2 === 0 ? "par" : "impar"} key={item.id}>
        <td>{item.id}</td>
        <td>{item.produto}</td>
        <td>R$ {item.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tabelaProduto}</tbody>
      </table>
    </div>
  );
}
