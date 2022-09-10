"use strict";

const menuHamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector("header");
const lines = document.querySelectorAll(".line");
const mainLine = document.querySelector(".main-line");
const secondaryLine = document.querySelector(".secondary-line");
const thirdLine = document.querySelector(".third-line");

menuHamburger.addEventListener("click", complicated);

function complicated() {
  menu.classList.toggle("header-show");
  lines.forEach((curr, i) => curr.classList.toggle("line-show"));
  mainLine.classList.toggle("main-line-clicked");
  secondaryLine.classList.toggle("secondary-line-clicked");
  thirdLine.classList.toggle("third-line-clicked");
}

////////////////////////////////////////////////////////////////

const fadeEntry = document.querySelectorAll(".entry");

// the options for the intersection observer
const options = {
  root: null,
  threshold: 0.2,
};

// simple logic to add class when said divs are 20% visible on user's page
const fadeFunction = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("entry-shown");

  observer.unobserve(entry.target); // unobserve the divs at the end for added performance
};

const observer = new IntersectionObserver(fadeFunction, options);

fadeEntry.forEach((curr, i) => observer.observe(curr)); // observing the divs with the intersection observer

///////////////////////////////////////////////////////////

const title = document.querySelector(".title"); // select the node
const strTitle = title.textContent; // select the actual text so we have a string
const titleSplit = strTitle.split("");
title.textContent = "";

for (let i = 0; i < titleSplit.length; i++) {
  title.innerHTML += "<span>" + titleSplit[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);
function onTick() {
  const span = document.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === titleSplit.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer); // clear the interval
  timer = null; // delete the timer function
}

////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

const ticking = document.querySelector(".ticking");
const ticker = setInterval(function () {
  ticking.classList.toggle("tick-active");
}, 500);

// Remove the ticker from view and use function "complete2"
// to stop the ticking function from running forever
const deleteTick = setTimeout(() => {
  ticking.style.opacity = "0";
  complete2();
}, 8000);

function complete2() {
  clearInterval(ticker);
}

////////////////////////////////////////////////////////

const clients = document.querySelector(".clients");
const websites = document.querySelector(".websites");
const exp = document.querySelector(".exp");

const init = function () {
  let counter1 = 0;
  function client() {
    if (counter1 <= 39) {
      counter1++;
      clients.innerHTML = `+${counter1}`;
      ifComplete();
    }
  }

  const ifComplete = function () {
    if (counter1 === 39) {
      complete3();
    }
  };

  function complete3() {
    clearInterval(client);
    client = null;
  }

  const add = setInterval(client, 70);
  //////////////////////////////////////////////////////////////
  let counter2 = 0;

  function client2() {
    if (counter2 <= 99) {
      counter2++;
      websites.innerHTML = `+${counter2}`;
      ifComplete2();
    }
  }

  const ifComplete2 = function () {
    if (counter2 === 99) {
      complete4();
    }
  };

  function complete4() {
    clearInterval(client2);
    client = null;
  }

  const add2 = setInterval(client2, 20);

  ///////////////////////////////////////////////////
  let counter3 = 0;

  function client3() {
    if (counter3 <= 1) {
      counter3++;
      exp.innerHTML = `+${counter3}`;
      ifComplete3();
    }
  }

  const ifComplete3 = function () {
    if (counter3 === 2) {
      complete5();
    }
  };

  function complete5() {
    clearInterval(client3);
    client = null;
  }

  const add3 = setInterval(client3, 200);
};

//////////////////////////////////////////////////////////////////

const numSection = document.querySelector(".section-Numbers");

const options2 = {
  threshold: 0.5,
  root: null,
};

const initialization = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  init();
  observer.unobserve(entry.target);
};

const observer2 = new IntersectionObserver(initialization, options2);

observer2.observe(numSection);

/////////////////////////////////////////////////////////////////

const items = document.querySelectorAll(".items");

const newoptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "100px",
};

const fadeWork = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("items-active");
};

const newObserver = new IntersectionObserver(fadeWork, newoptions);

items.forEach((curr) => newObserver.observe(curr));

/////////////////////////////////////

const work = document.querySelector("#work");
const home = document.querySelector("#home");
const contactMe = document.querySelector("#contact");
const about = document.querySelector("#about");

const anchors = document.querySelectorAll(".anchor");
const anchorDrop = function (event) {
  event.preventDefault();
  complicated();
  if (event.target.dataset.atr === "#work") {
    work.scrollIntoView({ behavior: "smooth" });
  } else if (event.target.dataset.atr === "#home") {
    home.scrollIntoView({ behavior: "smooth" });
  } else if (event.target.dataset.atr === "#contact") {
    contactMe.scrollIntoView({ behavior: "smooth" });
  } else if (event.target.dataset.atr === "#about") {
    about.scrollIntoView({ behavior: "smooth" });
  }
};

anchors.forEach((curr) => curr.addEventListener("click", anchorDrop));

////////////////////////////////////////////////////

const carouselSlide = document.querySelector(".slider-container");
const carouselQuotes = document.querySelectorAll(".slider-item");

const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

let counter = 0;
const size = carouselQuotes.length;

const goToSlide = function (slide) {
  carouselQuotes.forEach((curr, i) => {
    curr.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

const timer5 = setInterval(function (slide) {
  if (counter === size - 1) {
    counter = 0;
  } else {
    counter++;
  }
  goToSlide(counter);
}, 5000);

const nextSlide = function (slide) {
  if (counter === size - 1) {
    counter = 0;
  } else {
    counter++;
  }
  goToSlide(counter);
};

const prevSlide = function () {
  if (counter === 0) {
    counter = size - 1;
  } else {
    counter--;
  }
  goToSlide(counter);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
});
