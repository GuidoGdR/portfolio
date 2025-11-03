document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Función para establecer el tema
    const setTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Guardar la preferencia
        themeToggle.textContent = theme === 'dark' ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙';
    };

    // 1. Cargar la preferencia guardada o usar el tema del sistema
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        setTheme(storedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light'); // Establece el tema por defecto si no hay preferencia
    }

    // 2. Manejar el click del botón
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
});