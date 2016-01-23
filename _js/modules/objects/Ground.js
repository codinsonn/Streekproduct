'use strict';

export default class Ground extends Phaser.TileSprite {

  constructor(game, x, y, width, height) {

    super(game, x, y, width, height, 'groundtile');

    this.autoScroll(-100, 0);
    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;

  }

}
