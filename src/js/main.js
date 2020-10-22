import windowActionScroll from './modules/windowActionsScroll';
import burgerAction from './modules/burgerAction';
import features from './modules/features';

window.addEventListener('DOMContentLoaded', () => {
    windowActionScroll();
    burgerAction();
    features(['Web Designer', 'Freelancer', 'Front End Developer op!']);
});