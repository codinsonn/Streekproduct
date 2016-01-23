'use strict';

import Player from '../objects/Player';
import Ground from '../objects/Ground';
import Cuberdon from '../objects/Cuberdon';

export default class Play extends Phaser.State {

  create() {

    this.score = 0;
    this.cuberdons = [];

    this.game.stage.backgroundColor = '#FFFFFF';
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.ground = new Ground(this.game, 0, this.game.height - 50, this.game.width, this.game.height);
    this.game.add.existing(this.ground);

    this.player = new Player(this.game, 400, this.game.height - 137);
    this.game.add.existing(this.player);

    this.input.onDown.add(() => this.throwCuberdon('high'));

    this.cursors.up.onDown.add(() => this.throwCuberdon('high'));
    this.cursors.down.onDown.add(() => this.throwCuberdon('low'));

  }

  update() {

    for(let i = 0; i < this.cuberdons.length; i++){

      this.game.physics.arcade.collide(this.cuberdons[i], this.ground);

      if(this.cuberdons[i].getGrounded() === false && this.cuberdons[i].body.wasTouching.down){

        this.cuberdons[i].setGrounded();

      }else if(this.cuberdons[i].getSplattered() === false && this.cuberdons[i].getGrounded() === true && this.cuberdons[i].body.position.x < this.player.x + 40){

        this.cuberdons[i].setSplattered();

      }else if(this.cuberdons[i].getSplattered() === true && this.cuberdons[i].body.position.x < 0){

        this.cuberdons[i].destroy();
        this.cuberdons.splice(i, 1);

      }

    }

  }

  shutdown() {

  }

  throwCuberdon(highOrLow){

    let cuberdon = new Cuberdon(this.game, this.player.x - 60, this.player.y - 70);
    this.game.add.existing(cuberdon);
    cuberdon.throw(highOrLow);
    this.cuberdons.push(cuberdon);

    this.player.bringToTop();

  }

}
