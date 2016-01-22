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

    this.ground = new Ground(this.game, 0, this.game.height - 50, this.game.width, this.game.height);
    this.game.add.existing(this.ground);

    this.player = new Player(this.game, 400, this.game.height - 136);
    this.game.add.existing(this.player);

    this.input.onDown.add(() => this.throwCuberdon());

  }

  update() {



  }

  shutdown() {

  }

  throwCuberdon(){

    let cuberdon = new Cuberdon(this.game, 370, this.game.height - 250);
    this.game.add.existing(cuberdon);
    cuberdon.throw();
    this.cuberdons.push(cuberdon);

  }

}
