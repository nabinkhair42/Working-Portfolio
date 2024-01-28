//Created by Nabin Khair 
// For More Visit: https://nabinkhair.com.np
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorBG = document.querySelector(".cursor-bg");
const blurRed = document.querySelector(".blur-red");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.pageX - window.scrollX;
  const mouseY = e.pageY - window.scrollY;

  cursorDot.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
  cursorBG.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10
    }px) scale(1.1)`;
  blurRed.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.querySelector(".nav-list");

  document.querySelector(".menu-icon").addEventListener("click", function () {
    menuToggle.checked = !menuToggle.checked;

    navList.classList.toggle("active");
  });

  navList.addEventListener("click", function () {
    navList.classList.remove("active");
    menuToggle.checked = false;
  });
});


