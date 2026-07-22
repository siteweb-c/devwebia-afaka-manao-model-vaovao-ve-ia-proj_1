// Logique interactive auto-générée pour hanaovy site portelio aho tomp
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("hero-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("hero-name").value;
      const phone = document.getElementById("hero-phone").value;
      const msg = document.getElementById("hero-msg").value;

      const waText = encodeURIComponent(
        "Bonjour ! Je suis " + name + " (" + phone + ").\n" + msg
      );
      window.open("https://wa.me/261340000000?text=" + waText, "_blank");
    });
  }
});
