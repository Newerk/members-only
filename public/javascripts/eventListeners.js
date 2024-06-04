const testEvent = () => {
  console.log("CLICK!");
};

const redirectToHome = () => {
  window.location.replace("/");
};

const redirectToAccountPage = () => {
  window.location.replace("/account");
};

const redirectToSignup = () => {
  window.location.replace("/signup");
};

const redirectToLogin = () => {
  window.location.replace("/login");
};

const handleLogOut = () => {
  window.location.replace("/log-out");
};


const toggleDropdown = (className) => {
  const element = document.querySelector(`.${className}`);
  element.classList.toggle("visible");
};

const toggleMenus = () => {
  //handle dropdown stored in he header related to the user's account
  const accDropdown = document.querySelector(".account-dropdown");

  document.onclick = function (e) {
    if (e.target.className !== "header-account-btns") {
      accDropdown.classList.toggle("visible");
    } else {
      accDropdown.classList.remove("visible");
    }
  };
};


const clearTextbox = () => {
  //this will clear the text box when user submits a message
}