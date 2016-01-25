'use strict';

export default class Heart extends Phaser.Sprite {

  constructor(game, x, y) {

    super(game, x, y, 'heart', 1);

    this.anchor.setTo(0.5, 0.5);

  }

  update() {

    if(this.alpha > 0){

      this.x += -2;
      this.y += -2;
      this.alpha += -0.02;

    }else{

      this.destroy();

    }

  }

}
