export const removeClass = (selector, dom = document) => {
    dom.querySelectorAll('.' + selector).forEach(item => item.classList.remove(selector));
};

export const removeSelector = (selector, dom = document) => {
    dom.querySelectorAll(selector).forEach(item => item && item.remove());
}