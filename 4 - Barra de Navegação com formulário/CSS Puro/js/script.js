let btn = document.querySelector('.navbar-toggler-icon')
let hiddenItens = document.querySelector('.collapse')
btn.addEventListener('click', () => {
    hiddenItens.classList.toggle('show')
})