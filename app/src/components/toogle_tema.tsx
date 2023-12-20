
"use client"
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { getCookie, setCookie } from 'cookies-next';
function useDarkMode(temaProp: string): [string, Dispatch<SetStateAction<string>>] {

    const [tema, setTema] = useState<string>(temaProp);

    useEffect(() => {
        const corTema = tema === "dark" ? "dark" : "light";

        const root = window.document.documentElement;

        root.classList.remove("dark", "light");
        root.classList.add(corTema);

        setCookie("tema", tema)

    }, [tema]);

    return [tema, setTema];
}

export default useDarkMode;
