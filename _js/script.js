'use strict';

import Onepager from './pages/Onepager';

let onepager;

let $burger = document.querySelector('.burger');
let $menu = document.querySelector('.menu');

const init = () => {

  $burger.addEventListener('click', (e) => toggleMenu(e));

  initCurrentPage();

};

const initCurrentPage = () => {

  switch(document.querySelector('.active').getAttribute('href')){

  case '#intro':
  case '#cadeaus':
  case '#win':
  default:
    console.log('[Script] Intialising Onepager...');
    onepager = new Onepager();
    onepager.init();
    break;

  }

};

const toggleMenu = () => {

  if($burger.className === 'burger closed'){
    $burger.className = 'burger open';
    $menu.className = 'menu open';
  }else{
    $burger.className = 'burger closed';
    $menu.className = 'menu closed';
  }

};

init();
