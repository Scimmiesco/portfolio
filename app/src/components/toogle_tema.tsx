import { useEffect, useState, Dispatch, SetStateAction } from "react";

function useDarkMode(): [string, Dispatch<SetStateAction<string>>] {
    const isBrowser = typeof window !== "undefined";

    const [tema, setTema] = useState<string>(
        localStorage.getItem("tema") || "dark"
    );

    useEffect(() => {
        if (isBrowser) {
            const corTema = tema === "dark" ? "dark" : "light"; // Atualizado conforme necessário

            const root = window.document.documentElement;

            root.classList.remove("dark", "light");
            root.classList.add(corTema);

            localStorage.setItem("tema", corTema);
        }
    }, [isBrowser, tema]); // Use isBrowser e tema como dependências

    return [tema, setTema];
}

export default useDarkMode;
