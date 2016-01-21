'use strict';

//import {$} from './helpers/util';

let $burger = document.querySelector('.burger');
let $menu = document.querySelector('.menu');

const init = () => {

  console.log('[Script] Initialising...');

  $burger.addEventListener('click', (e) => toggleMenu(e));

  //$verticalNav.find('a').addEventListener('click', (event) => initScroll(event));

};

const toggleMenu = (e) => {

  console.log(e);

  if($burger.className === 'burger closed'){
    $burger.className = 'burger open';
    $menu.className = 'menu open';
  }else{
    $burger.className = 'burger closed';
    $menu.className = 'menu closed';
  }

};

init();
