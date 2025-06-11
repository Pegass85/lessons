document.addEventListener('click', documentActions)

function documentActions(e) {
    const targetElement = e.target
    //----------------------------------------------
    // (блок-2) код який додає клас для тега body і по якому стилізується меню бургер
    if (targetElement.closest('.icon-menu')) {
        document.body.classList.toggle('menu-open')
    }
    //----------------------------------------------

}