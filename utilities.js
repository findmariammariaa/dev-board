const today = new Date();
const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", options).split(",");

document.getElementById("day-text").innerText = formattedDate[0] + ","; 
document.getElementById("date-text").innerText = formattedDate[1] + formattedDate[2];  

let instant_time = new Date().toLocaleTimeString();
const themes = [
  "basic",  "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
  "forest", "aqua", "lofi", "pastel", "fantasy",  "black",
  "luxury", "dracula", "cmyk", "autumn", "acid", "lemonade",
  "night", "nord", "sunset", "dim", "coffee", "winter"
];

const themePrimaryColors = {
  basic:      "#3498db", light:      "#ffffff", dark:       "#1e1e1e",
  cupcake:    "#ffafcc", bumblebee:  "#facc15", emerald:    "#10b981",
  corporate:  "#007bff", synthwave:  "#ff007f", retro:      "#ff8c00",
  cyberpunk:  "#ff0099", valentine:  "#e63946", halloween:  "#ff7518",
  garden:     "#228b22", forest:     "#013220", aqua:       "#00ffff",
  lofi:       "#e5e5e5", pastel:     "#ffd1dc", fantasy:    "#d8bfd8",
  wireframe:  "#eeeeee", black:      "#000000", luxury:     "#b8860b",
  dracula:    "#bd93f9", cmyk:       "#00ffff", autumn:     "#ff4500",
  business:   "#1f2937", acid:       "#ff00ff", lemonade:   "#ffeb3b",
  night:      "#2c3e50", nord:       "#88c0d0", sunset:     "#ff4500",
  dim:        "#4b5563", coffee:     "#6f4e37", winter:     "#b0e0e6"
};

let currentThemeIndex = 0;
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", function() {
    currentThemeIndex++; 
    if (currentThemeIndex >= themes.length) {
        currentThemeIndex = 0;
    }

    const selectedTheme = themes[currentThemeIndex];
    document.documentElement.style.setProperty("--p", themePrimaryColors[selectedTheme]);
    document.body.style.backgroundColor = themePrimaryColors[selectedTheme]; 

    console.log(`Theme changed to: ${selectedTheme}`);
});