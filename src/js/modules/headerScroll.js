const headerScroll = (mode) => {
    const header = document.querySelector('.header');

    if(mode == 'scrolling') {
        header.classList.add('header--scroll');
    } else {
        header.classList.remove('header--scroll');
    }
};

export default headerScroll;