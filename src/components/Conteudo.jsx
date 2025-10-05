import React, { useState, useEffect } from "react";

function Conteudo() {
  // Importa todas as imagens tudo dentro de um objeto
  const imgFiles = import.meta.glob("../assets/drawings/*.jpg", {
    eager: true,
  });

  // Transforma o objeto em uma array de URLs
  const UrlsList = Object.values(imgFiles).map((mod) => mod.default || mod);

  const [ImageAtual, setImageAtual] = useState(null);

  useEffect(() => {
    if (UrlsList.length === 0) return; // Checa se tem Imagens
    //intevalo par mudar de imagens acada 5s
    setTimeout(() => {
      const RandomKey = Math.floor(Math.random() * UrlsList.length);
      //Faz aleatoriedade dentro da array
      const UrlSelect = UrlsList[RandomKey];

      setImageAtual(UrlSelect); // Altera o state
    }, 5000);
  }, []);

  return (
    <>
      <div className="imgs">
        <img src={ImageAtual} alt="Imagens" className="w-[250px] h-[250px]" />
      </div>

      <div className="link">
        <button>Sobre mim</button>
        <button>o que eu uso</button>
        <button>Artes</button>
      </div>
    </>
  );
}

export default Conteudo;
