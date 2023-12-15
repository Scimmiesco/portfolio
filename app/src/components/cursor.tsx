'use client'
import React, { useState, useEffect } from 'react';

const PontoSeguidor = () => {
    const [posicao, setPosicao] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let prevMouseX = 0;
        let prevMouseY = 0;

        const atualizarPosicao = (event: MouseEvent) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            setPosicao({ x: mouseX, y: mouseY });
        };

        document.addEventListener('mousemove', atualizarPosicao);

        return () => {
            document.removeEventListener('mousemove', atualizarPosicao);
        };
    }, []);

    return (
        <>
            {posicao.x !== 0 || posicao.y !== 0 ? (
                <div
                    style={{
                        top: `${posicao.y}px`,
                        left: `${posicao.x}px`,
                    }}
                    className="w-8 h-8 bg-white mix-blend-difference rounded-full absolute z-50 transition ease-in delay-100"
                />
            ) : null}
        </>
    );
};

export default PontoSeguidor;
