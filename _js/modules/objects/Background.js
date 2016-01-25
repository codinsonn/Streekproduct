'use strict';

export default class Background extends Phaser.Sprite {

  constructor(game, x, y) {

    super(game, x, y, 'background', 1);

    this.anchor.setTo(0, 0.5);

  }

  update() {

    if(this.x > -5600){
      this.x -= 1;
    }

  }

}
