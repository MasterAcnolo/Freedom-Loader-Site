import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(null);

    useEffect(() => {
        // Vérifier le thème sauvegardé ou utiliser la préférence système
        const savedTheme = localStorage.getItem("theme");
        
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
            applyTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(prefersDark);
            applyTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    const applyTheme = (theme) => {
        document.documentElement.classList.remove("light-theme", "dark-theme");
        if (theme === "light") {
            document.documentElement.classList.add("light-theme");
        } else {
            document.documentElement.classList.add("dark-theme");
        }
        localStorage.setItem("theme", theme);
    };

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        applyTheme(newTheme);
    };

    if (isDark === null) return null; // Éviter le flash

    return (
        <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
                background: "transparent",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                fontSize: "1.2rem",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
            {isDark ? (
                <i className="fas fa-sun"></i>
            ) : (
                <i className="fas fa-moon"></i>
            )}
        </button>
    );
}
