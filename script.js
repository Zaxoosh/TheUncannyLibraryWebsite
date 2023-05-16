const colorSchemes = ['color-scheme-1', 'color-scheme-2', 'color-scheme-3'];
let currentColorScheme = '';

function initializeColorScheme() {
  // Set the first color scheme on load
  currentColorScheme = colorSchemes[0];
  document.body.classList.add(currentColorScheme);
}

function toggleColorScheme() {
  // Prevent selecting the same color scheme twice in a row
  let newColorScheme = '';
  do {
    const randomIndex = Math.floor(Math.random() * colorSchemes.length);
    newColorScheme = colorSchemes[randomIndex];
  } while (newColorScheme === currentColorScheme);
  
  document.body.classList.remove(currentColorScheme);
  document.body.classList.add(newColorScheme);
  currentColorScheme = newColorScheme;
}

window.addEventListener('load', initializeColorScheme);
document.getElementById('color-scheme-toggle').addEventListener('click', toggleColorScheme);
