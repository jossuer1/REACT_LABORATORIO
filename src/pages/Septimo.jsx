import storeMusica from "../context/storeMusica";
import Octavo from "./Octavo";

const Septimo = () => {
  const { detalle, setCancion } = storeMusica();

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand </h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Librería para manejar el estado global. Además, funciona como un store
          que cualquier componente puede usar.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-blue-500 flex-colum justify-center items-center w-120 mx-auto mb-8">
        <Octavo />

        <p>Canción: {detalle.nombre}</p>

        <p>Género: {detalle.genero}</p>

        <button
          className="btn btn-danger btn-sm mt-4"
          onClick={() => {
            setCancion({
              nombre: "The way I loved you",
              genero: "Pop",
            });
          }}
        >
          Cambiar de canción
        </button>
      </div>
    </>
  );
};

export default Septimo;
