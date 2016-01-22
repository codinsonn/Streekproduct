'use strict';



export default class Cuberdon extends Phaser.Sprite {

  constructor(game, x, y) {

    super(game, x, y, 'cuberdon', 1);

    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this);

  }

  update() {

  }

  throw() {

    this.body.gravity.y = 2000;
    this.body.velocity.y = -1000;
    this.body.velocity.x = 800;
    this.game.add.tween(this).to({angle: -40}, 500).start();

  }

}
