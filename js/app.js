document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email.includes("@")) {
      alert("Wprowadź poprawny adres e-mail.");
      e.preventDefault();
    } else if (message.trim() === "") {
      alert("Wiadomość nie może być pusta.");
      e.preventDefault();
    }
  });
});

function showTime() {
  const time = new Date().toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}
setInterval(showTime, 1000);

function toggleForm() {
  const form = document.getElementById("contactForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }

  const colorBtn = document.getElementById("colorBtn");
  if (colorBtn) {
    colorBtn.addEventListener("click", () => {
      const newColor = prompt("Podaj kolor tła (np. lightblue):");
      document.body.style.backgroundColor = newColor;
      localStorage.setItem("bgColor", newColor);
    });
  }
});
