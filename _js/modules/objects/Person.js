'use strict';

export default class Person extends Phaser.Sprite {

  constructor(game, x, y, frame) {

    super(game, x, y, 'people', frame);

    this.anchor.setTo(1, 0.5);

    this.game.physics.arcade.enableBody(this);

  }

  reset(x, y, velocity){

    this.body.velocity.x = velocity;
    this.x = x;
    this.y = y;
    this.exists = true;
    this.hasScored = false;
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
    this.passedBy = true;
  }

  /*getScored(){
    return this.hasScored;
  }

  setScored(){
    this.body.immovable = true;
    this.setScored = true;
  }*/

}
