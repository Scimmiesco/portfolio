'use client'
import { useEffect, useState, Dispatch, SetStateAction } from "react";

function useDarkMode(): [string, Dispatch<SetStateAction<string>>] {
    const [tema, setTema] = useState<string>(
        typeof window !== "undefined" ? localStorage.getItem("tema") || "dark" : "dark"
    );

    const corTema = tema === "dark" ? "dark" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(corTema);
        root.classList.add(corTema);

        if (typeof window !== "undefined") {
            localStorage.setItem("tema", corTema);
        }
    }, [corTema]);

    return [corTema, setTema];
}

export default useDarkMode;
