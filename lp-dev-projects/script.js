document.querySelector(".hero-btn").addEventListener("click", function () {
  document.querySelector("#cards").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".contact-btn").addEventListener("click", function () {
  const inputName = document.querySelector(".input-name").value;
  const inputEmail = document.querySelector(".input-email").value;
  const inputMessage = document.querySelector(".input-message").value;

  if (
    inputName.length > 0 &&
    inputEmail.length > 0 &&
    inputMessage.length > 0
  ) {
    document.getElementById("buttonText").style.display = "none";
    document.getElementById("loadingIcon").style.display = "block";
  }
});
