const burgerAction = () => {
    const   burger = document.querySelector('.burger'),
            nav = document.querySelector('.header__nav'),
            navLinks = document.querySelectorAll('.nav__link'),
            body = document.body;

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
        nav.classList.toggle('header__nav--active');
        body.classList.toggle('body-lock');
    });

    navLinks.forEach(item => {
        item.addEventListener('click', e => {
            burger.classList.remove('burger--active');
            nav.classList.remove('header__nav--active');
            body.classList.remove('body-lock');
        });
    });
};

export default burgerAction;