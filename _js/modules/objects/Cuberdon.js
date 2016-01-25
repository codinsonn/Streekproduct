'use strict';

let MIN_VELOCITY = -194;

export default class Cuberdon extends Phaser.Sprite {

  constructor(game, x, y) {

    super(game, x, y, 'cuberdon', 1);

    this.grounded = false;
    this.splattered = false;
    this.highOrLow = '';

    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this);

    this.body.gravity.y = 2000;
    this.body.bounce.y = 0.3;
    this.angle = 30;

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

  }

  update() {

    if(this.splattered === false && this.angle < 110) {
      this.angle += 6.5;
    }

    if(this.grounded === true && this.body.velocity.x >= MIN_VELOCITY){
      this.body.velocity.x += -20;
    }

  }

  getGrounded(){
    return this.grounded;
  }

  checkGrounded(){

    if(this.grounded === false && this.body.wasTouching.down){

      this.grounded = true;

      if(this.highOrLow === 'high'){
        this.body.velocity.x = 300;
      }else if(this.highOrLow === 'low'){
        this.body.velocity.x = 200;
      }

    }

  }

  getSplattered(){
    return this.splattered;
  }

  setSplattered(){

    this.splattered = true;

    this.angle = 90;
    this.body.velocity.y += -20;
    this.anchor.setTo(1, 1);
    this.scale.setTo(-.3, 4.8);

  }

  throw(highOrLow){

    this.highOrLow = highOrLow;

    if(highOrLow === 'high'){
      this.body.velocity.y = -1100;
      this.body.velocity.x = 900;
    }else if(highOrLow === 'low'){
      this.body.velocity.y = -840;
      this.body.velocity.x = 750;
    }

  }

}
