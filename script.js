/**********
Elements
**********/
goUp = document.querySelector(".go-up");
burger = document.querySelector(".burger");
burgerBars = document.querySelectorAll(".bar");
burgerTop = document.querySelector(".bar-top");
burgerMid = document.querySelector(".bar-mid");
burgerBot = document.querySelector(".bar-bot");
menuPage = document.querySelector(".menu-page");
selectorWrap = document.querySelector(".selector-wrap");
selectorDiv = document.querySelector(".selector");
jobCard = document.querySelectorAll(".job");
isBurgerOpen = false;

/**************
Event Listeners
***************/

goUp.addEventListener("click", goUpFunction);
burger.addEventListener("click", openBurger);
selectorWrap.addEventListener("click", selectWork);

/**********************
Functions on Dom Load 
**********************/

window.addEventListener("load", (e) => {
  if (scrollY <= 999 && isBurgerOpen === false) {
    burger.style.display = "none";
  }
});
/*BACK TO TOP BUTTON*/
window.addEventListener("scroll", function (e) {
  if (scrollY >= 1000) {
    goUp.style.display = "flex";

    burger.style.display = "flex";
  } else {
    goUp.style.display = "none";
    burger.style.display = "none";
  }
});
/*BURGER CROSS*/
window.addEventListener("scroll", function (e) {
  if (scrollY >= 1000 && isBurgerOpen === true) {
    burger.style.display = "block";
  } else if (scrollY >= 1000 && isBurgerOpen === false) {
    burger.style.display = "flex";
  } else if (scrollY <= 999 && isBurgerOpen === true) {
    burger.style.display = "block";
  } else if (scrollY <= 999 && isBurgerOpen === false) {
    burger.style.display = "none";
  }
});

/*********************
Functions on Events 
**********************/

function goUpFunction(e) {
  window.scrollTo(0, 0);
}

function openBurger(e) {
  isBurgerOpen = !isBurgerOpen;

  if (isBurgerOpen) {
    console.log("open");

    menuPage.style.transform = "translateX(0)";
    burgerTop.style.backgroundColor = "black";
    burgerMid.style.backgroundColor = "black";
    burgerBot.style.backgroundColor = "black";
    burgerTop.style.transform = "rotate(45deg)";
    burgerBot.style.transform = "rotate(-45deg)";
    burgerMid.style.display = "none";
    burger.style.display = "block";
  } else {
    console.log("closed");
    menuPage.style.transform = "translateX(-500px)";
    burgerTop.style.backgroundColor = "white";
    burgerMid.style.backgroundColor = "white";
    burgerBot.style.backgroundColor = "white";
    burgerTop.style.transform = "";
    burgerBot.style.transform = "";
    burgerMid.style.display = "";
    burger.style.display = "";
    if (scrollY <= 999 && isBurgerOpen === false) {
      burger.style.display = "none";
    }
  }
}

function selectWork(e) {
  const workArea = e.target;
  if (workArea.classList.contains("photo")) {
    selectorDiv.style.transform = "translateX(0px)";
    selectorDiv.style.width = "";
  } else if (workArea.classList.contains("video")) {
    selectorDiv.style.transform = "translateX(158px)";
    selectorDiv.style.width = "";
  } else if (workArea.classList.contains("webdev")) {
    selectorDiv.style.transform = "translateX(315px)";
    selectorDiv.style.width = "12rem";
  }
  if (window.innerWidth <= 1138 && workArea.classList.contains("webdev")) {
    console.log("hello");
    selectorDiv.style.transform = "translateX(308px)";
    selectorDiv.style.width = "10rem";
  }

  if (window.innerWidth <= 470) {
    if (workArea.classList.contains("photo")) {
      selectorDiv.style.transform = "translateX(-134px)";
      selectorDiv.style.width = "7.5rem";
    } else if (workArea.classList.contains("video")) {
      selectorDiv.style.transform = "translateX(-15px)";
      selectorDiv.style.width = "7.5rem";
    } else if (workArea.classList.contains("webdev")) {
      selectorDiv.style.transform = "translateX(119px)";
      selectorDiv.style.width = "10rem";
    }
  }
}

/*********************
TIME LINE 
**********************/
const tl = gsap.timeline({ defaults: { ease: Power1.easeIn } });
tl.to(".name", { opacity: "100%", duration: 1.5 });
tl.to(".what-i-do", { opacity: "100%", duration: 1.5 }, "-=1.5");
tl.to(".job", { y: "0%", duration: 0.5 }, "-=1.5");

/*********************
SCROLL EFFECT
**********************/
