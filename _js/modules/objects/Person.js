'use strict';

export default class Person extends Phaser.Sprite {

  constructor(game, x, y, frame) {

    super(game, x, y, 'people', frame);

    this.anchor.setTo(1, 0.5);

    this.game.physics.arcade.enableBody(this);

  }

  reset(x, y, velocity, hasScored){

    this.body.velocity.x = velocity;
    this.x = x;
    this.y = y;
    this.exists = true;
    this.hasScored = hasScored;
    this.passedBy = false;

  }

  update() {

    if(!this.inWorld && this.passedBy === true){
      this.exists = false;
      this.destroy();
    }

  }

  getPassedBy(){
    return this.passedBy;
  }

  setPassedBy(){

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.passedBy = true;

  }

  getHasScored(){
    return this.hasScored;
  }

}
