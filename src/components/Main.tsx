import Image from "next/image";
import React from "react";
import { ImageCard } from "./ui/ImageCard";

export const Main = () => {
  return (
    <main className="flex-1 px-5">
      <div className="flex flex-col items-center">
        <div className="border border-blue-900 w-48 h-48 overflow-hidden rounded-md">
          <Image
            src="https://res.cloudinary.com/dsq0czzcy/image/upload/v1739534974/feb-fourteen/wc2a7jogi7yq4wp8vafn.jpg"
            alt="Foto principal"
            width={2000}
            height={2000}
            className="w-full"
          />
        </div>
        <p className="text-start my-4 w-10/12">
          ¡Issa!, te amo con todo mi corazón, eres el amor de mi vida. Esto fué
          lo único que se me ocurrió hacerte, porque ya no tengo ideas jaja
          espero que te hayan gustado las rosas. Las compré con mucho amor para
          ti.{" "}
          <span className="text-blue-800 font-bold">
            Gracias por ser mi esposa y darme unos hijos tan bonitos y buenos
            como tú. Nunca cambies.
          </span>
        </p>
      </div>

      <div>
        <p>
          Enseguida verás imágenes que seleccioné para ti jaja. Esas fueron las
          que se me hicieron más importantes en toda nuestra relación. Te iba a
          poner más cosas pero te digo que ya no alcancé 😭.
        </p>
      </div>

      <div className="my-6 border">
        <p className="uppercase font-bold my-2">galería de fotos</p>
        <ImageCard />
      </div>

      {/* <div>
        <p>Galería de Vídeos</p>
        TODO: Agregar el componente <VideoCard /> 
      </div>*/}

      {/* <div>
        <p>Galería de Música</p>
        TODO: Música que le he dedicado. <MusicCard /> 
      </div>*/}
    </main>
  );
};
