function initMenu() {
  const menu = document.querySelector(".list");
  const nav = document.querySelector("nav");

  function ativarMenu() {
    nav.classList.toggle("ativar");
  }
  menu.addEventListener("click", ativarMenu);
}
initMenu();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initTabNav() {
  const fotos = document.querySelectorAll(".galeria li");
  const paragrafos = document.querySelectorAll(".motivos p");

  paragrafos[0].classList.add("ativar");

  function activeTab(index) {
    paragrafos.forEach((paragrafo) => {
      paragrafo.classList.remove("ativar");
    });
    paragrafos[index].classList.add("ativar");
  }

  fotos.forEach((foto, index) => {
    foto.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
initTabNav();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo - 160,
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

// function initAnimacaoScroll() {
//   const sections = document.querySelectorAll(".js-scroll");

//   if (sections.length) {
//     const windowMetade = window.innerHeight * 0.6;

//     function animaScroll() {
//       sections.forEach((section) => {
//         const sectionTop = section.getBoundingClientRect().top - windowMetade;
//         if (sectionTop < 0) {
//           section.classList.add("ativo");
//         }
//       });
//     }

//     animaScroll();

//     window.addEventListener("scroll", animaScroll);
//   }
// }
// initAnimacaoScroll();
