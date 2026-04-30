import storeMusica from "../context/storeMusica";

const Octavo = () => {
  const { detalle } = storeMusica();

  return (
    <>
      <h2 className="text-purple-700">Hijo</h2>

      <div className="flex justify-center mb-8">
        <div className="max-w-sm border-2 border-purple-500 rounded-lg p-4 w-80 text-center">
          <p>Canción: {detalle.nombre}</p>

          <p>Género: {detalle.genero}</p>
        </div>
      </div>
    </>
  );
};

export default Octavo;
