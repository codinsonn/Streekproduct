'use strict';

export default class Preload extends Phaser.State {

  preload() {

    this.asset = this.add.sprite(this.game.width/2, this.game.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

  }

  create() {

  }

  update() {

  }

  onLoadComplete() {
    this.game.state.start('Play');
  }

}
