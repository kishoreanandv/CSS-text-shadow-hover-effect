const text = document.querySelector(".container");
const heading = text.querySelector("h1");
const shadow = 50;

function textMove(e) {
  // ES6-destructuring
  const { offsetWidth: width, offsetHeight: height } = text;
  // similar to const width=text.offsetWidth;const height=text.offsetHeight
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xShadow = Math.round((x / width) * shadow - shadow / 2);
  const yShadow = Math.round((y / height) * shadow - shadow / 2);

  heading.style.textShadow = `
  ${xShadow}px ${yShadow}px 0 rgba(0,0,240,0.6),
    ${yShadow * 3}px ${xShadow}px 0 #16A085,
   ${xShadow - 1}px ${xShadow - 2}px 0 #D35400`;
}

text.addEventListener("mousemove", textMove);
