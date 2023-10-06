const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");

signup.addEventListener("click", function (e) {
  e.preventDefault();
  main1.style.display = "none";
  main2.style.display = "block";
});

login.addEventListener("click", function (e) {
  e.preventDefault();
  main1.style.display = "block";
  main2.style.display = "none";
});
