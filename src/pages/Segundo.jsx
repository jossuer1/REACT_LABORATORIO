/*
  2- useState
*/
import { useState } from "react"

const Segundo = () => {
  const [carrito, setCarrito] = useState(0)
  const [total, setTotal] = useState(0)
  const precioProducto = 9.99

  const agregarProducto = () => {
    setCarrito(carrito + 1)
    setTotal(parseFloat((total + precioProducto).toFixed(2)))
  }

  const quitarProducto = () => {
    if (carrito > 0) {
      setCarrito(carrito - 1)
      setTotal(parseFloat((total - precioProducto).toFixed(2)))
    }
  }

  const vaciarCarrito = () => {
    setCarrito(0)
    setTotal(0)
  }

  return (
    <>
      <h1 className="font-bold text-2xl">useState</h1>
      <hr className="border-gray-400 mb-8"/>
      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite manejar el estado dentro de un componente.
        </li>
      </ul>

      <div className="text-center mb-8">
        <h2 className="mt-4 mb-2 text-lg font-semibold">🛒 Carrito de Compras</h2>
        <p className="mb-2">Producto: Auriculares Bluetooth — $9.99</p>
        <p className="mb-4">
          Cantidad: <span className="font-bold">{carrito}</span> | Total: <span className="font-bold">${total}</span>
        </p>

        <button
          className="bg-green-700 text-white py-1 px-3 mx-1 rounded"
          onClick={agregarProducto}>
          + Agregar
        </button>

        <button
          className="bg-red-700 text-white py-1 px-3 mx-1 rounded"
          onClick={quitarProducto}>
          - Quitar
        </button>

        <button
          className="bg-blue-700 text-white py-1 px-3 rounded"
          onClick={vaciarCarrito}>
          Vaciar
        </button>
      </div>
    </>
  )
}

export default Segundo