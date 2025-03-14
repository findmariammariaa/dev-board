const today = new Date();
const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", options).split(",");

document.getElementById("day-text").innerText = formattedDate[0] + ",";  // "Wed,"
document.getElementById("date-text").innerText = formattedDate[1] + formattedDate[2];  // "Jul 28 2025"

let instant_time = new Date().toLocaleTimeString();


  const themes = [
    "light", "emerald",
    "corporate", "synthwave", "retro", "cyberpunk", "valentine",
    "halloween", "garden", "forest", "aqua", "lofi", "pastel",
    "fantasy", "wireframe", "black", "luxury", "dracula"
  ];

  let currentThemeIndex = 0;

  document.getElementById("theme").addEventListener("click", () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.documentElement.setAttribute("data-theme", themes[currentThemeIndex]);
    localStorage.setItem("theme", themes[currentThemeIndex]); // Save theme preference
    console.log(currentThemeIndex)
  });

  // Load saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && themes.includes(savedTheme)) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    currentThemeIndex = themes.indexOf(savedTheme);
  }