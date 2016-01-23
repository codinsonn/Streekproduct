'use strict';

let MIN_POS = 350;
let MAX_POS = 500;

export default class Player extends Phaser.Sprite {

  constructor(game, x, y, frame) {

    super(game, x, y, 'player', frame);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.anchor.setTo(0.5, 0.5);
    this.animations.add('drive');
    this.animations.play('drive', 16, true);

  }

  update() {

    //Make the player go left
    if(this.cursors.left.isDown && this.x >= MIN_POS){
      this.x += -2;
    }

    //Make the player go right
    if(this.cursors.right.isDown && this.x <= MAX_POS){
      this.x += 2;
    }

  }

}
