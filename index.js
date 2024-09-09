const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact =
  document.querySelector("#contact");


const load1 = document.querySelector(
  "#load-button1"
);
const load2 = document.querySelector(
  "#load-button2"
);
const load3 = document.querySelector(
  "#load-button3"
);
const card1 = document.querySelector(
  "#card-container1"
);
const card2 = document.querySelector(
  "#card-container2"
);
const card3 = document.querySelector(
  "#card-container3"
);
burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
load1.addEventListener("click", () => {
  if (card1.classList.contains("hidden")) {
    card1.classList.remove("hidden");
    card1.classList.add("grid");
  } else {
    card1.classList.add("hidden");
  }
});
load2.addEventListener("click", () => {
  if (card2.classList.contains("hidden")) {
    card2.classList.remove("hidden");
    card2.classList.add("grid");
  } else {
    card2.classList.add("hidden");
  }
});

load3.addEventListener("click", () => {
  if (card3.classList.contains("hidden")) {
    card3.classList.remove("hidden");
    card3.classList.add("grid");
  } else {
    card3.classList.add("hidden");
  }
});

const changes = () => {
  console.log("Hello");
};
contact.addEventListener("click", () => {
  contact.classList.add("change");
  if (home.classList.contains("change")) {
    home.classList.remove("change");
  } else if (about.classList.contains("change")) {
    about.classList.remove("change");
  }
});
about.addEventListener("click", () => {
  about.classList.add("change");
  if (home.classList.contains("change")) {
    home.classList.remove("change");
  } else if (
    contact.classList.contains("change")
  ) {
    contact.classList.remove("change");
  }
});
home.addEventListener("click", () => {
  home.classList.add("change");
  if (contact.classList.contains("change")) {
    contact.classList.remove("change");
  } else if (about.classList.contains("change")) {
    about.classList.remove("change");
  }
});
