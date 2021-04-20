import React from "react";
import "./pagination.css";

const Pagination = ({ pokemonsPerPage, totalPokemons , paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <div key={number} className="pagination-number" onClick={()=> paginate(number)}>
          <p > {number} </p>
        </div>
      ))}
    </div>
  );
};

export default Pagination;