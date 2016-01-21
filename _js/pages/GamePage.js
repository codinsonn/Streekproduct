'use strict';

import Boot from '../modules/states/Boot';
import Preload from '../modules/states/Preload';
import Play from '../modules/states/Play';

export default class GamePage{

  constructor(){

    // -- Class Variables -------------
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);

  }

  init(){

    this.game.state.add('Boot', Boot, false);
    this.game.state.add('Preload', Preload, false);
    this.game.state.add('Play', Play, false);
    this.game.state.start('Boot');

  }



}
