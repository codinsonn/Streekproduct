'use strict';

import Player from '../objects/Player';
import Ground from '../objects/Ground';
import Cuberdon from '../objects/Cuberdon';
//import PeopleGroup from '../objects/PeopleGroup';
import Person from '../objects/Person';

export default class Play extends Phaser.State {

  create() {

    this.score = 0;
    this.cuberdons = this.game.add.group();
    this.people = this.game.add.group();

    this.game.stage.backgroundColor = '#FFFFFF';
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.ground = new Ground(this.game, 0, this.game.height - 40, this.game.width + 600, this.game.height);
    this.game.add.existing(this.ground);

    this.player = new Player(this.game, 400, this.game.height - 127);
    this.game.add.existing(this.player);

    this.cursors.up.onDown.add(() => this.throwCuberdon('high'));
    this.cursors.down.onDown.add(() => this.throwCuberdon('low'));

    this.personGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.generatePerson, this);
    this.personGenerator.timer.start();

  }

  update() {

    this.checkPeople();
    this.checkCuberdons();

  }

  checkCuberdons(){

    this.cuberdons.forEach((cuberdon) => {

      this.game.physics.arcade.collide(cuberdon, this.ground);

      if(cuberdon.getGrounded() === false && cuberdon.body.wasTouching.down){

        cuberdon.setGrounded();

      }

      if(cuberdon.getSplattered() === false && cuberdon.getGrounded() === true && cuberdon.body.position.x < this.player.x + 37){

        if(this.player.getHealth() > 8){
          this.player.damageCart();
          cuberdon.setSplattered();
        }else{
          this.player.playDeathAnimation();
        }

      }

      if(cuberdon.getSplattered() === true && cuberdon.body.position.x < -200){

        cuberdon.destroy();

      }

    });

  }

  checkPeople(){

    this.people.forEach((person) => {

      this.game.physics.arcade.collide(person, this.ground);

      if(person.getPassedBy() === false){

        if(person.body.position.x < this.player.x){
          person.setPassedBy();
        }

        this.cuberdons.forEach((cuberdon) => {

          if(cuberdon.getGrounded() === false){
            this.game.physics.arcade.collide(person, cuberdon, this.personHitHandler, null, this);
          }

        });

      }

    });

  }

  shutdown() {

  }

  personHitHandler(person, cuberdon){

    person.destroy();
    cuberdon.destroy();



  }

  generatePerson(){

    let personX = this.game.rnd.integerInRange(this.game.width + 80, this.game.width + 340);
    let personY = this.game.height - 120;
    let personFrame = this.game.rnd.integerInRange(1, 4);
    let personVelocity = this.game.rnd.integerInRange(-240, -160);

    let person = new Person(this.game, personX, personY, personFrame);
    this.people.add(person, true);
    person.reset(personX, personY, personVelocity);

  }

  throwCuberdon(highOrLow){

    let cuberdon = new Cuberdon(this.game, this.player.x - 60, this.player.y - 70);
    this.cuberdons.add(cuberdon);
    cuberdon.throw(highOrLow);

    this.player.bringToTop();

  }

}
