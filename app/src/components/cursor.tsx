"use client";
import React, { useState, useEffect } from "react";

const PontoSeguidor = () => {
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  let widthCursor = 32;
  useEffect(() => {
    const atualizarPosicao = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY + window.scrollY; // Considera o deslocamento vertical da página
      setPosicao({ x: mouseX - widthCursor / 2, y: mouseY - widthCursor / 2 });
    };

    document.addEventListener("mousemove", atualizarPosicao);

    return () => {
      document.removeEventListener("mousemove", atualizarPosicao);
    };
  }, []);

  return (
    <>
      {posicao.x !== 0 || posicao.y !== 0 ? (
        <div
          style={{
            top: `${posicao.y}px`,
            left: `${posicao.x}px`,
            width: `${widthCursor}px`,
            height: `${widthCursor}px`,
          }}
          className="pointer-events-none bg-white mix-blend-difference rounded-full absolute z-50 transition ease-in delay-100"
        />
      ) : null}
    </>
  );
};

export default PontoSeguidor;
