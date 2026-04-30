/*
  
  1- Variable
  2- Fragment
  3- JSX
  4- Condicional
  5.- Eventos
  
*/

const Primero = () => {
  const user = {
    name: "Byron",
    rol: "Admin",
  };

  return (
    <>
      <h1 className="font-bold text-2xl">React</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          <strong>Variable:</strong>Sirve para almacenar información que luego
          se puede usar en un componente.
        </li>
        <li>
          <strong>Fragment:</strong> Permite agrupar varios elementos sin añadir
          un div extra al HTML.
        </li>
        <li>
          <strong>JSX:</strong> Sintaxis que combina HTML y JavaScript dentro de
          React.
        </li>
        <li>
          <strong>Condicional:</strong> Mostrar contenido dependiendo de una
          condición.
        </li>
        <li>
          <strong>Eventos:</strong> Permiten que la aplicación responda a las
          acciones del usuario (onClick, onChange, etc.).
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-120 border rounded-lg p-4 w-80 text-center">
          <h2 className="text-lg font-semibold mb-2">
            Bienvenido(a) - {user.name}
          </h2>

          <p className="mb-3">
            {user.rol === "Admin" ? "Administrador" : "Invitado"}
          </p>

          <button
            className="btn btn-success mx-1"
            onClick={() => {
              alert("cierre de sesion");
            }}
          >
            Salir
          </button>
        </div>
      </div>
    </>
  );
};

export default Primero;
