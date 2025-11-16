const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconclose = document.querySelector(".icon-close");

// Register → slide
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

// Login → slide back
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Login button → open popup
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

// Close icon → close popup
iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  wrapper.classList.remove("active");
});
