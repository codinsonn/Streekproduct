'use strict';

import {animate, getTopOffset} from './helpers/util';

let $burger = document.querySelector('.burger');
let $menu = document.querySelector('.menu');
let $links = document.querySelectorAll('.menu a');
let $pageSections = document.querySelectorAll('.pageSection');

let scrolling = false;

const init = () => {

  console.log('[Script] Initialising...');

  // -- Init Actions -------------
  checkCurrentSection();

  // -- Event Listeners -------------
  $burger.addEventListener('click', (e) => toggleMenu(e));
  window.addEventListener('scroll', (e) => checkCurrentSection(e));
  for(let i = 0; i < $links.length; i++){
    $links[i].addEventListener('click', (e) => checkAnchorAndScroll(e));
  }

};

const checkCurrentSection = () => {

  if(scrolling === false){
    for(let i = 0; i < $pageSections.length; i++){

      let checkOffset = $pageSections[i].offsetTop + $pageSections[i].clientHeight - 140;
      if(getTopOffset() >= $pageSections[i].offsetTop && getTopOffset() <= checkOffset){
        setActiveLinks(`#${$pageSections[i].getAttribute('id')}`);
      }

    }
  }

};

const checkAnchorAndScroll = (e) => {

  let $link = e.currentTarget;
  let href = $link.getAttribute('href');

  if(href.substr(0, 1) === '#'){

    e.preventDefault();

    let target = document.querySelector(`#${href.substr(1, href.length)}`);

    setActiveLinks(href);

    scrolling = true;
    animate(document.documentElement, 'scrollTop', '', getTopOffset(), target.offsetTop - 8, 600, true);
    setTimeout(() => {
      scrolling = false;
    }, 580);

  }

};

const setActiveLinks = (href) => {

  for(let i = 0; i < $links.length; i++){
    if($links[i].getAttribute('href') === href){
      $links[i].className = 'active';
    }else{
      $links[i].className = '';
    }
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
