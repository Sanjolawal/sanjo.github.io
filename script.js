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

let Lead = document.querySelector('.pop-outmain')
console.log(Lead)

window.setTimeout(function (){
 Lead.style.display = 'grid'
}, 3500)


let btn = document.querySelector('.btn-2')

btn.addEventListener('click', Close)

function Close(){
  Lead.style.display = 'none'
}