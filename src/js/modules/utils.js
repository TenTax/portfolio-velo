export const removeClass = (selector) => {
    document.querySelectorAll('.' + selector).forEach(item => item.classList.remove(selector));
};