const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("startBtn");
const music = document.getElementById("music");

const lines = [
  "Hi Harshvi ❤️",
  "I've been waiting for this day...",
  "Instead of giving you everything at once...",
  "I'll give you one little surprise every day.",
  "Every day, one more piece of our story will appear.",
  "Are you ready to begin? ✨"
];

let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (lineIndex === 0) {
    title.textContent = lines[0];
    lineIndex++;
    setTimeout(typeWriter, 1200);
    return;
  }

  if (lineIndex >= lines.length) {
    button.style.display = "inline-block";
    button.style.opacity = "0";

    setTimeout(() => {
      button.style.transition = "0.8s";
      button.style.opacity = "1";
    }, 100);

    return;
  }

  let current = lines[lineIndex];

  if (charIndex < current.length) {
    message.innerHTML += current.charAt(charIndex);
    charIndex++;

    setTimeout(typeWriter, 45);
  } else {
    message.innerHTML += "<br><br>";
    charIndex = 0;
    lineIndex++;

    setTimeout(typeWriter, 900);
  }
}

window.onload = () => {
  setTimeout(typeWriter, 800);
};

button.addEventListener("click", () => {

  // Music starts only after user interaction
  music.play().catch(() => {});

  // Fade out
  document.body.style.transition = "1s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    // Temporary until puzzle page is built
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:linear-gradient(#dff5ff,#fff7fb);
        font-family:Poppins,sans-serif;
        text-align:center;
        padding:30px;
      ">
        <h1 style="font-size:50px;color:#ff6f9e;">
          ❤️ Welcome Harshvi ❤️
        </h1>

        <p style="font-size:22px;margin-top:20px;max-width:700px;">
          Tomorrow, your first puzzle piece will be waiting for you...
        </p>

        <p style="margin-top:40px;color:#666;">
          (The real puzzle unlock system comes next.)
        </p>
      </div>
    `;
  }, 1000);

});
