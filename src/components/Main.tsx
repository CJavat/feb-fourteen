import React from "react";

export const Main = () => {
  return (
    <main className="flex-1 px-5">
      <div className="flex flex-col items-center">
        <div className="border border-blue-900 w-48 h-48 overflow-hidden rounded-md">
          <p>Aquí irá una imagen grande</p>
        </div>
        <p className="text-center w-10/12">
          Sit minim esse pariatur elit excepteur occaecat mollit nisi
          exercitation minim. Aquí irán unas palabras gei.
        </p>
      </div>

      <div>
        <p>Aquí irán más palabras</p>
      </div>

      {/* TODO: Usar Cloudinary para el uso de vídeos, música e imágenes */}
      {/* https://docs.astro.build/es/guides/media/cloudinary */}

      <div>
        <p>galería de fotos</p>
        {/* TODO: Agregar <ImageCard /> | Agregarle props */}
      </div>

      <div>
        <p>Galería de Vídeos</p>
        {/* TODO: Agregar el componente <VideoCard /> */}
      </div>

      <div>
        <p>Galería de Música</p>
        {/* TODO: Música que le he dedicado. <MusicCard /> */}
      </div>
    </main>
  );
};
