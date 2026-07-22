document.addEventListener("DOMContentLoaded", function () {
  const pinForm = document.getElementById("pin-form");
  const loginBox = document.getElementById("login-box");
  const adminPanel = document.getElementById("admin-panel");
  const logoutBtn = document.getElementById("logout-btn");

  if (pinForm) {
    pinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const pin = document.getElementById("pin-input").value;
      if (pin === "1234" || pin.length >= 4) {
        loginBox.classList.add("hidden");
        adminPanel.classList.remove("hidden");
      } else {
        alert("Code PIN incorrect.");
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      adminPanel.classList.add("hidden");
      loginBox.classList.remove("hidden");
    });
  }
});