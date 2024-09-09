const menu = document.getElementById('menu')
const navDiv = document.getElementById('navDiv')

if (menu){
    menu.addEventListener('click', () => {
        navDiv.classList.add('active')
    })
}