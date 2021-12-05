const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.header-menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})

window.onscroll = () => {
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active')
    } else {
        document.querySelector('#scroll-top').classList.remove('active')
    }
    menu.classList.remove('active')
    burger.classList.remove('active')
}