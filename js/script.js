let btnMobile = document.querySelector('#btn-mobile')

function activeMenu(e){
    if(e.type==='touchstart')
    e.preventDefault()
    document.querySelector('.header')
    .classList.toggle('active')
    if(document.querySelector('.header').classList.contains('active')){
        
    } 
}

btnMobile.addEventListener('click', activeMenu)
btnMobile.addEventListener('touchstart', activeMenu)