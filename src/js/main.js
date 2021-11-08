import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
import modals from './modals';

import initMap from './components/yandexMaps';
import formFilter from './components/formFilter';
import sliderMainPage from './components/sliderMainPage';
import { contacts } from './components/contacts';
import product from './components/product';
import alignHeights from './components/alignHeights';
import mainPage from './components/mainPage';
import sliderAboutPage from './components/sliderAboutPage';
// import sliderGalleryFilter from './components/sliderGalleryFilter';
import mainPageAnimations from './components/mainPageAnimations';
import burgerMenu from './components/burgerMenu';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    mediaPlayer();
    modals();
    datepicker();
    
    initMap();
    formFilter();
    sliderMainPage();
    contacts();
    product();

    mainPage();
    sliderAboutPage();
    // sliderGalleryFilter();
    mainPageAnimations();
    burgerMenu();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);

    alignHeights('.benifits-list__container', '.benifits-list__item-name');
    alignHeights('.about-awards__list', '.about-awards__image');
})
