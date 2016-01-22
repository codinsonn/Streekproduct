'use strict';

export default class Preload extends Phaser.State {

  preload() {

    this.asset = this.add.sprite(this.game.width/2, this.game.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.game.load.image('groundtile', 'assets/img/game/groundtile.png');
    this.game.load.image('cuberdon', 'assets/img/game/Cuberdon.png');

    this.load.bitmapFont('pacifico', 'assets/fonts/pacificoregular/Pacifico.png', 'assets/fonts/pacificoregular/Pacifico.fnt');
    this.load.bitmapFont('ptsans', 'assets/fonts/ptsansbold/ptsansbold.png', 'assets/fonts/ptsansbold/ptsansbold.fnt');

    this.load.spritesheet('player', 'assets/img/game/PlayerSprite.png', 240, 180, 5);

  }

  create() {

  }

  update() {

  }

  onLoadComplete() {
    this.game.state.start('Play');
  }

}
