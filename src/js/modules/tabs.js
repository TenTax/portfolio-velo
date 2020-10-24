import { removeClass } from "./utils";

const tabs = () => {
    const header = document.querySelector('.tabs__navbar'),
        tab = document.querySelectorAll('.tabs__card');

    function switchCategory(category) {
        tab.forEach(item => {
            if (item.getAttribute('data-category') == category || category == 'all') {
                item.classList.add('tabs__card--visible');
            } else {
                item.classList.remove('tabs__card--visible');
            }
        });
    }
    
    header.addEventListener('click', e => {
        const target = e.target;

        if (target && target.classList.contains('tabs__btn')) {
            switchCategory(target.getAttribute('data-sort'));

            removeClass('tabs__btn--active');

            target.classList.add('tabs__btn--active');
        }
    });
};

export default tabs;