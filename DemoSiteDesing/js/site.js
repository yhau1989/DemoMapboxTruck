


function clickMenuHome()
{
    let m = document.getElementById('menuMobile')
    m.classList.toggle("hidden");
}

function clickMenuDash()
{
    let m = document.getElementById('menuDash')
    m.classList.toggle("hidden");
}


const menuIdash = document.getElementById('menuIconDash');
if(menuIdash)
    menuIdash.addEventListener('click',clickMenuDash)


const btMenuHome = document.getElementById('btMenuHome');
if(btMenuHome)
    btMenuHome.addEventListener('click',clickMenuHome)