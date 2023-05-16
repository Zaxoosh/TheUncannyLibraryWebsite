const letters = document.querySelectorAll(".glow-letter");

letters.forEach((letter) => {
  letter.addEventListener("mouseover", () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const randomSize = `${Math.floor(Math.random() * (150 - 100) + 100)}%`;
    letter.style.setProperty("--color", randomColor);
    letter.style.fontSize = randomSize;
    letter.classList.add("letter-jump");
  });

  letter.addEventListener("animationend", () => {
    letter.classList.remove("letter-jump");
  });
});
