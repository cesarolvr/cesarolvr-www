const themes = {
  dark: {
    "--bg-primary": "#222222",
    "--bg-total": "#fff",
    "--bg-secondary": "#3a3a3a",
    "--border-primary": "#3a3a3a",
    "--cursor-bg": "#3a3a3a",
    "--color-total": "#fff",
    "--color-total-inverse": "#000",
    "--blend-mode": "plus-lighter",
    "--text-primary": "#ffffff",
    "--text-secondary": "#bdbdbd",
    "--hover-bg": "#3a3a3a",
    "--scrollbar-thumb": "rgba(255, 255, 255, 0.18)",
    "--scrollbar-thumb-hover": "rgba(255, 255, 255, 0.35)",
    "--avatar-light": "0.2",
    "--tw-text-gray-primary": "var(--text-primary)",
    "--tw-text-gray-secondary": "var(--text-secondary)",
  },
  light: {
    "--bg-primary": "#ffffff",
    "--bg-total": "#000",
    "--bg-secondary": "#ddd",
    "--border-primary": "#ddd",
    "--cursor-bg": "#ddd",
    "--color-total": "#000",
    "--color-total-inverse": "#fff",
    "--blend-mode": "multiply",
    "--text-primary": "#222222",
    "--text-secondary": "#666666",
    "--hover-bg": "#f0f0f0",
    "--scrollbar-thumb": "rgba(0, 0, 0, 0.18)",
    "--scrollbar-thumb-hover": "rgba(0, 0, 0, 0.35)",
    "--avatar-light": "1",
    "--tw-text-gray-primary": "var(--text-primary)",
    "--tw-text-gray-secondary": "var(--text-secondary)",
  },
};

// Add transition styles to root element
const addTransitionStyles = () => {
  const style = document.createElement("style");
  style.setAttribute("data-theme-transition", "true");
  style.textContent = `
    :root {
      transition: all 0.3s ease;
    }
    * {
      transition: background-color 0.3s ease,
                  color 0.3s ease,
                  border-color 0.3s ease,
                  box-shadow 0.3s ease;
    }
  `;
  document.head.appendChild(style);
};

export const setTheme = (themeName) => {
  const theme = themes[themeName];
  if (!theme) return;

  // Add transition styles if not already added
  if (!document.querySelector("style[data-theme-transition]")) {
    addTransitionStyles();
  }

  Object.entries(theme).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });

  // Save theme preference
  localStorage.setItem("theme", themeName);
};

export const getTheme = () => {
  return localStorage.getItem("theme") || "dark";
};

export const setupTheme = () => {
  const currentTheme = getTheme();
  setTheme(currentTheme);
  return currentTheme;
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  return newTheme;
};
