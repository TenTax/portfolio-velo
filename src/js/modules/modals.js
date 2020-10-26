import calcScroll from "./calcScroll";

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector),
            scroll = calcScroll();

        triggers.forEach(item => {
            item.addEventListener('click', e => {
                modal.classList.add('popup--visible');
                document.body.classList.add('body-lock');
                document.body.style.marginRight = scroll + 'px';
                console.log(scroll)
            });
        });

        close.addEventListener('click', e => {
            modal.classList.remove('popup--visible');
            document.body.classList.remove('body-lock');
            document.body.style.marginRight = '0px';
        });
    }

    bindModal('[data-trigger="popup-1"]', '#popup-1', '.popup__close');
    bindModal('[data-trigger="popup-2"]', '#popup-2', '.popup__close');
};

export default modals;