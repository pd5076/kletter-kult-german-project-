//post request to redirect the contact message
window.addEventListener("load", function () {
  const form = document.getElementById("contact__form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      document.querySelector(".form-submit-msg").style.display = "block";
    });
  });
});
