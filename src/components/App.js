import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaFromForm, setPizzaFromForm] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(fPizzas => setPizzas(fPizzas))
  }, [])

  function handlePassToForm(pizza) {
    setPizzaFromForm(pizza)
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaFromForm}/>
      <PizzaList pizzas={pizzas} handlePassToForm={handlePassToForm}/>
    </>
  );
}

export default App;

/*
The pizza form will then render the information about the pizza in the form, which will be editable.

When the form is submitted, the information should be reflected in your table and persist in the backend.
*/