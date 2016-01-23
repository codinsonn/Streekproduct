'use strict';

import Onepager from './pages/Onepager';
import OrderPage from './pages/OrderPage';
import GamePage from './pages/GamePage';

let onepager, orderPage, gamePage;

let $burger = document.querySelector('.burger');
let $menu = document.querySelector('.menu');

const init = () => {

  $burger.addEventListener('click', (e) => toggleMenu(e));

  initCurrentPage();

};

const initCurrentPage = () => {

  switch(document.querySelector('.active').getAttribute('href')){

  case 'bestel.html':
    console.log('[Script] Intialising Order Page...');
    orderPage = new OrderPage();
    orderPage.init();
    break;

  case 'game.html':
    console.log('[Script] Intialising Game Page...');
    gamePage = new GamePage();
    gamePage.init();
    break;

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
  }else if(document.querySelector('.active').getAttribute('href') !== 'game.html'){
    $burger.className = 'burger closed';
    $menu.className = 'menu closed';
  }

};

init();
