import React from "react";

class TopNavAdditional extends React.Component {
  navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");

      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 1
          }s`;
        }
        // console.log(index / 5 + 0.2);
      });

      // Burger Animation
      burger.classList.toggle("toggle");
    });
  };
  navSlide = () => {};

  render() {
    return <div></div>;
  }
}
