/*
  3- useEffect
*/

import { useEffect, useState } from "react";

const Tercero = () => {
  const [pokemon, setPokemon] = useState(null);
  const [buscar, setBuscar] = useState(1);

  const getPokemon = async () => {
    const id = Math.floor(Math.random() * 151) + 1;
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const response = await request.json();
    setPokemon(response);
  };

  useEffect(() => {
    getPokemon();
  }, [buscar]);

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>
      <hr className="border-gray-400 mb-8" />
      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite ejecutar efectos secundarios, como peticiones a
          APIs o actualizar el DOM.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        {pokemon && (
          <div className="border rounded-lg p-4 w-60 text-center shadow">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="mx-auto w-24 h-24"
            />
            <h2 className="text-lg font-bold capitalize mb-2">
              {pokemon.name}
            </h2>
            <p className="mb-1">ID: #{pokemon.id}</p>
            <p className="mb-1">Altura: {pokemon.height / 10} m</p>
            <p className="mb-1">Peso: {pokemon.weight / 10} kg</p>
            <p className="mb-3">
              Tipos: {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
          </div>
        )}
      </div>

      <div className="text-center">
        <button
          className="bg-yellow-500 text-white py-1 px-4 rounded"
          onClick={() => setBuscar(buscar + 1)}
        >
          🔀 Nuevo Pokémon
        </button>
      </div>
    </>
  );
};

export default Tercero;