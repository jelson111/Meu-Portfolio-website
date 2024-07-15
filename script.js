/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >  20) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "50px";
      navHeader.style.lineHeight = "50px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "80px";
      navHeader.style.lineHeight = "80px";
    }
  }

/*Efeitos ::*/
var tipeefeito = new Typed(".typedText", {
    strings : ["Designer UI/UX", "Especialista em Redes Socias", "Desenvolvedor Web"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000

})
/*Animaçao barra scroll ::*/
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration: 2000,
    reset: true
})
/*Home:::*/
sr.reveal('.ficheiro-text-card',{})
  sr.reveal('.ficheiro-nome',{delay: 100})
  sr.reveal('.ficheiro-text-info',{delay: 200})
  sr.reveal('.ficheiro-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.ficheiro-image',{delay: 300})
/*Projeto::*/
sr.reveal('.box-projeto',{interval: 200})

/*Cabeçalho::*/
sr.reveal('.topo-cabecalho',{})
/*Informçao Sobre */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.info-sobre',{delay: 100})
  srLeft.reveal('.infor-contacto',{delay: 100})
  /* -- Sobre Habilidades / Form -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.experiencia-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})

  /* ---- Mudança dos Links----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)