const windowActionScroll = () => {
    const   header = document.querySelector('.header'),
            navLinks = document.querySelectorAll('.nav__link'),
            sections = [];
    
    // Поиск секций по идентификатору через массив ссылок
    navLinks.forEach(item => {
        const section = document.querySelector(item.getAttribute('href'));
        sections.push(section);
    });

    window.addEventListener('scroll', function() {
        // Эффект для шапки сайта при прокрутке
        if(window.scrollY == 0) {
            header.classList.remove('header--scroll');
        } else {
            header.classList.add('header--scroll');
        }

        // Поведение ссылок навигации в шапке сайта при прокрутке
        sections.forEach((item, i) => {
            if(window.scrollY > item.offsetTop - (document.documentElement.clientHeight / 2)) {
                navLinks.forEach(link => {
                    link.classList.remove('link--active');
                });
                navLinks[i].classList.add('link--active');
            }
        });
    });
};

export default windowActionScroll;