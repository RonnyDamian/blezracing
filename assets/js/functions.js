var menuBtn = document.getElementById('menu-btn');var menu = document.getElementById('menu');menuBtn.addEventListener('click', function () {    if(document.querySelector('#menu.active'))    {        menu.classList.remove('active');    }else    {        menu.className="active";    }});