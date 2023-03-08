import React, { useState } from 'react'

const  Productos =[
  {
    id: 1,
    product:'camisa',
    precio: 200},
    {
      id: 2,
      product: 'pantalon',
      precio: 500
    },
    {
      id: 3,
      product: 'gorra',
      precio: 50
    },
    {
      id: 4,
      product: 'Jersey',
      precio: 522
    },
    {
      id: 5,
      product: 'Zapatos',
      precio: 505
    },
    {
      id: 6,
      product: 'Cucos',
      precio: 30
    }
  ]


export const AñadirProd=()=> {
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  const addCategory = () => {
    setCategories(list=> [...list, category])
    setCategory('')
  }
  const SelectProductos = (event) => {
    setCategory(event.target.value)
  }
  

  return (
    <div>
      <h1>Parcial 1, Añadir producto</h1>
      <select onChange={SelectProductos}>
        {Productos.map((product) => (
          <option key={product.id} value={product.product}>
            {product.product}
          </option>
        ))}
      </select>
      <br />
      <button onClick={addCategory}>Add</button>
      <button onClick={addCategory}>Listar</button>
      <ol>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>
        })}
      </ol>
    </div>
  )
}


export default AñadirProd