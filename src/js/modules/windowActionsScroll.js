import headerScroll from "./headerScroll";

const windowActionScroll = () => {
    window.addEventListener('scroll', function() {
        if(document.documentElement.scrollTop == 0) {
            headerScroll('noscroll');
        } else {
            headerScroll('scrolling');
        }
    });
};

export default windowActionScroll;