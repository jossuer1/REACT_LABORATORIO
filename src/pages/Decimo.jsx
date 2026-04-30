import { useEffect, useState } from "react";

const Tema = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const temaGuardado = localStorage.getItem("dark-mode");
    return temaGuardado ? JSON.parse(temaGuardado) : false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className={`min-vh-100 d-flex flex-column justify-content-center align-items-center ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h1 className="mb-4">{darkMode ? "Modo oscuro 🌙" : "Modo claro ☀️"}</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
      >
        Cambiar tema
      </button>
    </div>
  );
};

export default Tema;
