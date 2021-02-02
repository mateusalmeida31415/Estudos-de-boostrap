let btn = document.querySelector('.navbar-toggler-icon')
let hiddenMenu = document.querySelector('.collapse')
btn.addEventListener('click', () =>{
    console.log(hiddenMenu.classList.toggle('show'))
})