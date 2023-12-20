
'use client';
import { useEffect, useState, Dispatch, SetStateAction } from "react";

function useDarkMode(): [string, Dispatch<SetStateAction<string>>] {
    const [tema, setTema] = useState<string>(localStorage.getItem("tema") || "dark");

    useEffect(() => {
        const corTema = tema === "dark" ? "dark" : "light";

        const root = window.document.documentElement;

        root.classList.remove("dark", "light");
        root.classList.add(corTema);

        localStorage.setItem('tema', tema);

    }, [tema]);

    return [tema, setTema];
}

export default useDarkMode;
