/*
  customHook
*/
import { useState } from "react"
import { useFetch } from "../customHook/useFecth"

const Cuarto = () => {
  const [pokemon, setPokemon] = useState(null)
  const [clima, setClima] = useState(null)

  const fetchDataBackend = useFetch()

  const getPokemon = async () => {
    const id = Math.floor(Math.random() * 151) + 1
    const data = await fetchDataBackend(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setPokemon(data)
  }

  const getClima = async () => {
    const data = await fetchDataBackend(
      "https://api.open-meteo.com/v1/forecast?latitude=-0.23&longitude=-78.52&current_weather=true"
    )
    setClima(data)
  }

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>
      <hr className="border-gray-400 mb-8"/>
      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
      </ul>

      <div className="flex justify-center gap-6 mb-8 mt-8 flex-wrap">

        {/* Card Pokémon */}
        <div className="border rounded-lg p-4 w-64 text-center shadow">
          <h2 className="text-lg font-semibold mb-3 underline">🎮 Pokémon Aleatorio</h2>
          {pokemon ? (
            <>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto"/>
              <p className="capitalize font-bold">{pokemon.name}</p>
              <p>ID: #{pokemon.id}</p>
              <p>Tipos: {pokemon.types.map(t => t.type.name).join(", ")}</p>
            </>
          ) : (
            <p className="text-gray-400 mb-4">Sin datos aún</p>
          )}
          <button
            className="bg-yellow-500 text-white py-1 px-3 rounded mt-3"
            onClick={getPokemon}>
            Obtener Pokémon
          </button>
        </div>

        {/* Card Clima */}
        <div className="border rounded-lg p-4 w-64 text-center shadow">
          <h2 className="text-lg font-semibold mb-3 underline">🌤️ Clima en Quito</h2>
          {clima ? (
            <>
              <p className="mb-2">Temperatura: <span className="font-bold">{clima.current_weather.temperature}°C</span></p>
              <p className="mb-2">Viento: {clima.current_weather.windspeed} km/h</p>
              <p className="mb-2">Código clima: {clima.current_weather.weathercode}</p>
            </>
          ) : (
            <p className="text-gray-400 mb-4">Sin datos aún</p>
          )}
          <button
            className="bg-blue-600 text-white py-1 px-3 rounded mt-3"
            onClick={getClima}>
            Obtener Clima
          </button>
        </div>

      </div>
    </>
  )
}

export default Cuarto