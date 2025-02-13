import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 text-blue-900">
      {/* TODO: Agregar Mensaje gei */}
      <h1 className="text-3xl font-bold">Título</h1>

      {/* TODO: Navegación para las secciones de las páginas */}
      <ul className="flex space-x-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
};
