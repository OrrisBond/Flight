let fName = document.getElementById("fName");
let pass = document.getElementById("pass");
let email = document.getElementById("email");
let type = document.getElementById("type");
let rPass = document.getElementById("rPass");
let rEmail = document.getElementById("rEmail");
let rName = document.getElementById("rName");
let rType = document.getElementById("rType");
let regi = document.getElementById("regi");
let opt = document.querySelectorAll(".form option");
let Popup = document.querySelector(".after");

fName.addEventListener("input", () => {
  rName.innerHTML = fName.value;
});

pass.addEventListener("input", () => {
  rPass.innerHTML = pass.value;
});

email.addEventListener("input", () => {
  rEmail.innerHTML = email.value;
});

type.addEventListener("input", () => {
  rType.innerHTML = type.value;
});

regi.addEventListener("click", (e) => {
  e.preventDefault();
  if (fName == "" || pass == "" || email == "") {
    Popup.style.display = "NONE";
  } else {
    Popup.style.display = "block";
  }
});
