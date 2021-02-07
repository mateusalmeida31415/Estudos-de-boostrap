let btn = document.querySelector('.navbar-toggle-icon')
let menu = document.querySelector('.collapse')

btn.addEventListener('click', () => {
    menu.classList.toggle('no-collapse')
})

let btnDropdown = document.querySelector('.dropdown')
let dropdownMenu = document.querySelector('.dropdown-menu')

btnDropdown.addEventListener('mouseenter', () => {
   dropdownMenu.classList.toggle('hidde-dropdown')
} )

btnDropdown.addEventListener('mouseleave', () => {
    dropdownMenu.classList.toggle('hidde-dropdown')
 } )