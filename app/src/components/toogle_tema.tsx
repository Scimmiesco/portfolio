'use client'
import { useEffect, useState, Dispatch, SetStateAction } from "react";

function useDarkMode(): [string, Dispatch<SetStateAction<string>>] {

    const temaInicial = typeof window !== "undefined" ?  localStorage.getItem("tema") || "dark": "dark";

    const [tema, setTema] = useState<string>(temaInicial);


    useEffect(() => {
        const root = window.document.documentElement;

        const classTemaRemover = tema === 'dark' ? 'light' : "dark" as string;
        root.classList.remove(classTemaRemover);
        root.classList.add(tema);

        if (typeof window !== "undefined") {
            localStorage.setItem("tema", tema);
        }
    }, [tema]);

    return [tema, setTema];
}

export default useDarkMode;
