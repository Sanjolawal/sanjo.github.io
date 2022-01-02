let button = document.querySelector('#button')
console.log(button)

window.addEventListener('scroll', Scroll)
 
  function Scroll(){
  if(window.pageYOffset > 6100 || window.pageYOffset < 420 ){
    button.style.display = 'none'
}
  else if(window.pageYOffset > 420) {
    button.style.display = 'grid'
}
}


