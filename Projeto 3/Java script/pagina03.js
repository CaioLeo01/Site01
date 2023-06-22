class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

// fixar com o scroll

const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll=function(){
    fixarMenuNoTopo();
}
function fixarMenuNoTopo(){
    if(window.pageYOffset > topoNav){
        nav.classList.add("FixoNoTopo3");
        
    }
    else{
        nav.classList.remove("FixoNoTopo3");
        
    }
}
// Window.addEventListener("scroll", function(){
//   let header = dcument.querySelector('#header')
//   header.classList.toggle('rolagem',window.scrollY > 0)
// })
  