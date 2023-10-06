const face = document.querySelector(".face");
const eyes = document.querySelectorAll(".eye");
const eyeApples = document.querySelectorAll(".eye__apple");

face.addEventListener("mousemove", (e) => moveEye(e));

face.addEventListener("mouseout", () => {
  eyeApples.forEach((eyeApple) => {
    eyeApple.style.transition = "0.2s";
    eyeApple.style.top = "";
    eyeApple.style.left = "";
  });
});

function getCenter(block) {
  const rect = block.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function moveEye(e) {
  const x = e.clientX;
  const y = e.clientY;

  eyeApples.forEach((eyeApple) => {
    const sideX = x - Math.round(getCenter(eyeApple).x);
    const sideY = y - Math.round(getCenter(eyeApple).y);
    const hypotenuse = Math.round(Math.sqrt(sideX ** 2 + sideY ** 2));
    const similarity = hypotenuse / (eyeApple.clientWidth / 2);
    eyeApple.style.top = sideY / similarity + "px";
    eyeApple.style.left = sideX / similarity + "px";
  });
  eyeApples.forEach((eyeApple) => {
    eyeApple.style.transition = "";
  });
}

eyes.forEach((eye) => {
  eye.addEventListener("mousemove", (e) => {
    eyeApples.forEach((eyeApple) => {
      eyeApple.style.transition = "0.2s";
    });
    e.stopPropagation();
  });
});

eyes.forEach((eye) => {
  eye.addEventListener("mouseout", (e) => {
    eyeApples.forEach((eyeApple) => {
      eyeApple.style.transition = "";
    });
  });
});
