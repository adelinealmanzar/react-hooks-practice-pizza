import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({
    topping: '',
    size: 'Small',
    vegetarian: true
  })

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(fPizzas => setPizzas(fPizzas))
  }, [])

  function handlePassToForm(pizza) {
    setFormData({
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  }

  function handlePassFromForm(formToEditObj) {
    fetch(`http://localhost:3001/pizzas/${formToEditObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formToEditObj)
    })
    .then(r => r.json())
    .then(ObjPatchedF => {
      const updatedForm = [...pizzas].map(pizza => pizza.id !== ObjPatchedF.id ? pizza : ObjPatchedF)
      setPizzas(updatedForm)
    })
  }

  console.log(pizzas)

  return (
    <>
      <Header />
      <PizzaForm
        formData={formData}
        setFormData={setFormData}
        handlePassFromForm={handlePassFromForm}
      />
      <PizzaList pizzas={pizzas} handlePassToForm={handlePassToForm}/>
    </>
  );
}

export default App;
