'use strict';

import Boot from '../modules/states/Boot';
import Preload from '../modules/states/Preload';
import Play from '../modules/states/Play';

let infoClasses = ['showInfo1', 'showInfo2', 'showInfo3'];

export default class GamePage{

  constructor(){

    // -- Class Variables -------------
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);
    this.infoIndex = 0;

    // -- Element Variables -------------
    this.$infoSection = document.querySelector('#infoWrapper');
    this.$btnNext = document.querySelector('.next');
    this.$btnPrev = document.querySelector('.prev');

    // -- Event Listeners -------------
    this.$btnNext.addEventListener('click', () => this.scrollToInfo(1));
    this.$btnPrev.addEventListener('click', () => this.scrollToInfo(-1));

  }

  init(){

    this.game.state.add('Boot', Boot, false);
    this.game.state.add('Preload', Preload, false);
    this.game.state.add('Play', Play, false);
    this.game.state.start('Boot');

  }

  scrollToInfo(direction){

    if((direction < 0 && this.infoIndex < 1) || (direction > 0 && this.infoIndex > infoClasses.length-2)){
      direction = 0;
    }

    this.infoIndex += direction;
    let infoClass = infoClasses[this.infoIndex];
    this.$infoSection.className = infoClass;

    this.checkButtons(infoClass);

  }

  checkButtons(infoClass){

    switch(infoClass){

    case 'showInfo1':
      this.$btnPrev.className = 'prev hide';
      this.$btnNext.className = 'next show';
      break;

    case 'showInfo2':
      this.$btnPrev.className = 'prev show';
      this.$btnNext.className = 'next show';
      break;

    case 'showInfo3':
      this.$btnPrev.className = 'prev show';
      this.$btnNext.className = 'next hide';
      break;

    }

  }

}
