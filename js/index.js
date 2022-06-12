navAddBTN = document.querySelector("#button-nav-add");
navRemoveBTN = document.querySelector("#button-nav-remove");
navbar = document.querySelector(".nav-menu");
navLinks = document.querySelectorAll(".nav-link");
spiderLogo = document.querySelector(".logo-spider");
scrollupBTN = document.querySelector("#button-scrollUp");

const windowEvents = ["load", "resize"];
windowEvents.forEach((event) => {
  window.addEventListener(event, () => {
    window.scrollTo({
      left: 0,
      top: 5,
    });
  });
});
// adjust navigation links and their positions

navAddBTN.onclick = () => {
  navbar.classList.add("nav-menu-show");
  setTimeout(() => {
    navRemoveBTN.classList.add("show");
    spiderLogo.classList.add("show");
  }, 200);
};
// show navbar on small screens

navRemoveBTN.onclick = () => {
  navbar.classList.remove("nav-menu-show");
  hide();
};
// hide navbar on small screens
window.addEventListener("resize", () => {
  if (window.screen.width >= 820) {
    navbar.classList.remove("nav-menu-show");
    hide();
  }
});
// change from tablet size to laptop size makes an issue in navbar , solved it by window

navLinks.forEach((link) => {
  link.onclick = () => {
    navRemoveBTN.classList.remove("button-show");
    navbar.classList.remove("nav-menu-show");
    hide();
  };
});
// hide navbar while clicking on a link

const hide = () => {
  navRemoveBTN.classList.remove("show");
  spiderLogo.classList.remove("show");
};
// hide spider logo and close btn
window.addEventListener("scroll", () => {
  if (window.scrollY >= 76) {
    navbar.parentElement.classList.add("nav-changeBackground");
    scrollupBTN.classList.add("show");
  } else {
    navbar.parentElement.classList.remove("nav-changeBackground");
    scrollupBTN.classList.remove("show");
  }
  for (let a of navLinks) {
    const sectionName = a.getAttribute("href").slice(1);
    const section = document.getElementById(sectionName);
    const navbarHeight = navbar.getBoundingClientRect().height;
    const sectionHeight = section.getBoundingClientRect().height;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      let position = section.offsetTop - navbarHeight * 1.3;
      if (window.screen.width <= 768) {
        position = position + 300;
        if (
          navbar.parentElement.classList.contains("nav-changeBackground") &&
          a.getAttribute("href") == "#home"
        ) {
          position = position - 205;
        } else if (
          !navbar.parentElement.classList.contains("nav-changeBackground")
        ) {
          position = position + 230;
        }
      }
      if (!navbar.parentElement.classList.contains("nav-changeBackground")) {
        position = position - navbarHeight;
      }
      window.scrollTo({ left: 0, top: position });
    });
    let sectionTop = section.offsetTop - 120;
    if (
      window.scrollY > sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(`a[href='${a.getAttribute("href")}']`)
        .classList.add("nav-link-active");
    } else {
      document
        .querySelector(`a[href='${a.getAttribute("href")}']`)
        .classList.remove("nav-link-active");
    }
  }
});
// change navbar background color on scrolling down (y-axis)
// add a dot under active link

let homeSwiper = new Swiper(".homeSwiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// home swiper
let newSwiper = new Swiper(".newSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// new arrivals swiper

scrollupBTN.onclick = () => {
  scrollupBTN = document.querySelector("#button-scrollUp");
  window.location.href = "#";
};
// scroll to top

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 400,
  reset: true,
});
sr.reveal(".homeSwiper , .newSwiper ,.newsletter ,.discount");
sr.reveal(".trick-data , .category-data", { interval: 100 });
sr.reveal(".about-data ,.discount-data", { origin: "left" });
// reveal content on scrolling
