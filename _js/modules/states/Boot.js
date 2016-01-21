'use strict';

export default class Boot extends Phaser.State {

  preload() {
    this.load.image('preloader', 'assets/img/game/preloader.gif');
  }

  create() {
    this.game.state.start('Preload');
  }

}
