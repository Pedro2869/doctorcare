window.addEventListener('scroll', onScroll )

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {

  // linha alvo

  const targetLine = scrollY + innerHeight / 2
  
  // VERIFICAR SE A SEÇÃO PASSOU DA LINHA
  // QUAIS DADOS VOU PRECISAR?

  // O TOPO DA SEÇÃO
  const sectionTop = section.offsetTop

  // A ALTURA DA SEÇÃO
  const sectionHeight = section.offsetHeight
  
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // INFORMAÇÕES DOS DADOS E DA LÓGICA
  console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  // VERIFICAR SE A BASE ESTÁ ABAIXO DA LINHA ALVO
  // QUAIS DADOS VOU PRECISAR?


  //  A SEÇÃO TERMINA ONDE?
  
  const sectionEndsAt = sectionTop + sectionHeight

  // O FINAL DA SEÇÃO PASSOU DA LINHA ALVO

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline)


  // LIMITES DA SEÇÃO

  const sectionBounderies = 
  sectionTopReachOrPassedTargetLine && 
  !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBounderies) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about,
    #about header,
    #about .content`);