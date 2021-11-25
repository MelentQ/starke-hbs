import validation from './validation';
import masks from './masks';

import initMap from './components/yandexMaps';
import sliderMainPage from './components/sliderMainPage';
import { contacts } from './components/contacts';
import product from './components/product';
import alignHeights from './components/alignHeights';
import mainPage from './components/mainPage';
import sliderAboutPage from './components/sliderAboutPage';
// import sliderGalleryFilter from './components/sliderGalleryFilter';
import mainPageAnimations from './components/mainPageAnimations';
import burgerMenu from './components/burgerMenu';
import modalFormQuestion from './components/modal-form-question';

document.addEventListener('DOMContentLoaded', function() {
    validation();
    masks();
    
    initMap();
    // formFilter();
    sliderMainPage();
    contacts();
    product();

    mainPage();
    sliderAboutPage();
    // sliderGalleryFilter();
    mainPageAnimations();
    burgerMenu();

    modalFormQuestion();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);

    alignHeights('.benifits-list__container', '.benifits-list__item-name');
    alignHeights('.about-awards__list', '.about-awards__image');
})
