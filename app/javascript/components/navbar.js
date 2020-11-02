const toggleActiveNav = () => {
let mainNavLinks = document.querySelectorAll(".nav__link");
let mainSections = document.querySelectorAll("section");

console.log(mainNavLinks);
console.log(mainSections);
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    console.log(section);
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

}

export { toggleActiveNav };