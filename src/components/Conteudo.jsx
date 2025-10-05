import React, { useState, useEffect } from "react";
import defaultImg from "../assets/drawings/Picsart_22-10-01_17-12-20-851.jpg";

function Conteudo() {
  const imgFiles = import.meta.glob("../assets/drawings/*.jpg", {
    eager: true,
  });
  const UrlsList = Object.values(imgFiles).map((mod) => mod.default || mod);

  const [ImageAtual, setImageAtual] = useState(defaultImg);
  // NOVO ESTADO: Usamos um contador (chave) para forçar a reanimação.
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    if (UrlsList.length === 0) return;

    const intervalId = setInterval(() => {
      const RandomKey = Math.floor(Math.random() * UrlsList.length);
      const UrlSelect = UrlsList[RandomKey];

      // 1. Troca o SRC da imagem
      setImageAtual(UrlSelect);

      // 2. Incrementa a chave de animação. Isso força o React
      // a recriar o elemento no DOM (ver o 'key' no <img>),
      // reiniciando a animação CSS!
      setAnimateKey((prevKey) => prevKey + 1);
    }, 5000);
    // Previni que o Loop continue rodando em segundo plano.
    return () => clearInterval(intervalId);
  }, [UrlsList]);

  return (
    <>
      <div className="imgs">
        <img
          // A CHAVE DO SEGREDO: 'key' força o React a tratar este <img>
          // como um novo elemento no DOM sempre que 'animateKey' muda.
          key={animateKey}
          src={ImageAtual}
          alt="Imagens"
          // Adiciona a classe de animação
          className={`w-[230px] h-[230px] rounded-md Fade`}
        />
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
