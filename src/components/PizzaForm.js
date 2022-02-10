import React, { useState } from "react";

function PizzaForm({ formData, setFormData, handlePassFromForm }) {
  

  function handleSubmit(e) {
    e.preventDefault()
    handlePassFromForm(formData)
  }



  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={(e) => setFormData({...formData, topping: e.target.value})}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formData.size} onChange={(e) => setFormData({...formData, size: e.target.value})}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={formData.vegetarian}
              onChange={(e) => setFormData({...formData, vegetarian: e.target.value === 'on' ? true : false})}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!formData.vegetarian}
              onChange={(e) => setFormData({...formData, vegetarian: !e.target.value})}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
