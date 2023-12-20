import { useEffect, useState, Dispatch, SetStateAction } from "react";

function useDarkMode(): [string, Dispatch<SetStateAction<string>>] {
    const isBrowser = typeof window !== "undefined";

    const [tema, setTema] = useState<string>("dark");

    useEffect(() => {
        if (isBrowser) {
            const savedTema = localStorage.getItem("tema");
            setTema(savedTema || "dark");
        }
    }, [isBrowser]);

    useEffect(() => {
        if (isBrowser) {
            const corTema = tema === "dark" ? "dark" : "light";
            const root = window.document.documentElement;

            root.classList.remove("dark", "light");
            root.classList.add(corTema);

            localStorage.setItem("tema", corTema);
        }
    }, [isBrowser, tema]);

    return [tema, setTema];
}

export default useDarkMode;
