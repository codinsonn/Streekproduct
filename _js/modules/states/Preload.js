'use strict';

export default class Preload extends Phaser.State {

  preload() {

    this.asset = this.add.sprite(this.game.width*0.6, this.game.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.game.load.image('groundtile', 'assets/img/game/CityGroundTile.png');
    this.game.load.image('cuberdon', 'assets/img/game/Cuberdon.png');
    this.game.load.image('heart', 'assets/img/game/Heart.png');
    this.game.load.image('background', 'assets/img/game/CityscapeBackground.png');

    this.load.spritesheet('player', 'assets/img/game/CharacterAnim.png', 240, 180, 12);
    this.load.spritesheet('people', 'assets/img/game/PeopleSpritesheet.png', 42, 150, 4);

  }

  create() {

  }

  update() {

  }

  onLoadComplete() {
    this.game.state.start('Play');
  }

}
