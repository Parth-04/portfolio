let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const page3 = document.querySelector('.page-3');
const page2 = document.querySelector('.page-2');

window.addEventListener('scroll', function() {
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log("Scroll:", scrollTop); 

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.classList.add('navbar-up');
    } else {
        navbar.classList.remove('navbar-up');
    }

    if (page3){
        const page3Top = page3.offsetTop;
        if (scrollTop >= page3Top-500){
            navbar.classList.add('dark-mode-nav')
            page3.classList.add('dark-mode');
            page2.classList.add('dark-mode');
        }
        else{
            navbar.classList.remove('dark-mode-nav');
            page3.classList.remove('dark-mode');
            page2.classList.remove('dark-mode');
        }
    }

    lastScrollTop = Math.max(0, scrollTop); 
}, true);
