import windowActionScroll from './modules/windowActionsScroll';
import menuAction from './modules/menuAction';
import features from './modules/features';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    windowActionScroll();
    menuAction();
    features(['Web Designer', 'Freelancer', 'Front End Developer op!']);
    tabs();
    forms();
});