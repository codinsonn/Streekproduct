'use strict';

import {animate, getTopOffset} from '../helpers/util';

export default class Onepager{

  constructor(){

    // -- Class Variables -------------
    this.scrolling = false;
    this.stateObj = { hash: '#' };

    // -- Element Variables -----------
    this.$links = document.querySelectorAll('.menu a');
    this.$pageSections = document.querySelectorAll('.pageSection');

    // -- Event Listeners -------------
    window.addEventListener('scroll', (e) => this.checkCurrentSection(e));
    for(let i = 0; i < this.$links.length; i++){
      this.$links[i].addEventListener('click', (e) => this.checkAnchorAndScroll(e));
    }

  }

  init(){

    // Updates 'a.active' when refreshing once scrolling has taken place.
    this.checkCurrentSection();

  }

  checkCurrentSection(){

    if(this.scrolling === false){
      for(let i = 0; i < this.$pageSections.length; i++){

        let checkOffset = this.$pageSections[i].offsetTop + this.$pageSections[i].clientHeight - 140;
        if(getTopOffset() >= (this.$pageSections[i].offsetTop - 100) && getTopOffset() <= checkOffset){
          this.setActiveLinks(`#${this.$pageSections[i].getAttribute('id')}`);
          history.pushState(this.stateObj, this.$pageSections[i].getAttribute('id'), `#${this.$pageSections[i].getAttribute('id')}`);
        }

      }
    }

  }

  checkAnchorAndScroll(e){

    let $link = e.currentTarget;
    let href = $link.getAttribute('href');

    if(href.substr(0, 1) === '#'){

      e.preventDefault();

      let target = document.querySelector(`#${href.substr(1, href.length)}`);

      this.setActiveLinks(href);

      this.scrolling = true;
      animate(document.documentElement, 'scrollTop', '', getTopOffset(), target.offsetTop - 8, 600, true);
      setTimeout(() => {
        this.scrolling = false;
      }, 580);

    }

  }

  setActiveLinks(href){

    for(let i = 0; i < this.$links.length; i++){
      if(this.$links[i].getAttribute('href') === href){
        this.$links[i].className = 'active';
      }else{
        this.$links[i].className = '';
      }
    }

  }

}
