'use strict';



export default class Player extends Phaser.Sprite {

  constructor(game, x, y, frame) {

    super(game, x, y, 'player', frame);

    this.anchor.setTo(0.5, 0.5);
    this.animations.add('drive');
    this.animations.play('drive', 7, true);

    //this.game.physics.arcade.enableBody(this);

  }

  update() {

  }

}
