'use strict';

import Player from '../objects/Player';
import Ground from '../objects/Ground';
import Background from '../objects/Background';
import Cuberdon from '../objects/Cuberdon';
import Person from '../objects/Person';
import Heart from '../objects/Heart';

export default class Play extends Phaser.State {

  create() {

    this.passed = 0;
    this.customers = 0;
    this.heartsScored = 0;

    this.prevPersonFrame = 0;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    this.$pauseScreen = document.querySelector('#pauseScreen');
    this.$lightbox = document.querySelector('#lightbox');
    this.$lightbox.addEventListener('click', () => this.togglePause());

    this.$heartsScored = document.querySelector('.heartsScored p');
    this.$customersGained = document.querySelector('.customersGained p');
    this.$scoreScreen = document.querySelector('#scoreScreen');

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.pauseKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.background = new Background(this.game, 300, this.game.height - 685);
    this.game.add.existing(this.background);

    this.ground = new Ground(this.game, 0, this.game.height - 40, this.game.width + 600, this.game.height);
    this.game.add.existing(this.ground);

    this.cuberdons = this.game.add.group();
    this.people = this.game.add.group();

    this.player = new Player(this.game, 400, this.game.height - 127);
    this.game.add.existing(this.player);

    this.cursors.up.onDown.add(() => this.throwCuberdon('high'));
    this.cursors.down.onDown.add(() => this.throwCuberdon('low'));
    this.pauseKey.onDown.add(() => this.togglePause());

    this.generatePerson();
    this.personGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.generatePerson, this);
    this.personGenerator.timer.start();

    this.gameOver = false;
    this.togglePause();

  }

  togglePause() {

    if(this.gameOver === false){

      if(this.game.paused){
        this.game.paused = false;
        this.$pauseScreen.className = 'hide';
        this.$lightbox.className = 'hide';
        document.querySelector('#pauseScreen footer h3').innerHTML = 'Druk op \'Spatie\' om verder te spelen';
      }else{
        this.game.paused = true;
        this.$pauseScreen.className = 'show';
        this.$lightbox.className = 'show';
      }

    }

  }

  update() {

    this.checkPeople();
    this.checkCuberdons();
    this.checkProgress();

  }

  updateScoreLabels(){

    this.$heartsScored.innerHTML = this.heartsScored;
    this.$customersGained.innerHTML = this.customers;

  }

  checkProgress(){

    if(this.background.x === -5600){

      this.gameOver = true;
      this.player.setGameWon();
      this.ground.stopAutoScroll();

      setTimeout(() => { this.gameWon(); }, 2400);

    }

  }

  calculateEndScore(){

    document.querySelector('.heartScore').innerHTML = this.heartsScored;
    document.querySelector('.clientScore').innerHTML = this.customers;
    document.querySelector('.healthScore').innerHTML = this.player.getHealth();

    let clearScore, endScore;
    if(this.player.getHealth() > 0){
      clearScore = 100;
      document.querySelector('.clearScore').innerHTML = 100;
    }else{
      clearScore = 0;
      document.querySelector('.clearScore').innerHTML = 0;
    }

    endScore = this.heartsScored + this.customers + this.player.getHealth() + clearScore;
    document.querySelector('.score span').innerHTML = endScore;

  }

  gameLost(){

    console.log('[Game] Too bad! You\'ve lost!');

    this.calculateEndScore();

    document.querySelector('#scoreScreen header h1').innerHTML = 'Game Over';

    this.$scoreScreen.className = 'lost show';
    this.game.paused = true;
    this.gameOver = true;

  }

  gameWon(){

    console.log('[Game] Congratulations! You\'ve won!');

    document.querySelector('.healthLabel').className = 'gained healthLabel';
    document.querySelector('.clearLabel').className = 'gained clearLabel';

    this.calculateEndScore();

    document.querySelector('#scoreScreen header h1').innerHTML = 'Gewonnen!';

    this.$scoreScreen.className = 'won show';
    this.game.paused = true;
    this.gameOver = true;

  }

  checkCuberdons(){

    this.cuberdons.forEach((cuberdon) => {

      this.game.physics.arcade.collide(cuberdon, this.ground);

      cuberdon.checkGrounded();

      if(cuberdon.getSplattered() === false && cuberdon.getGrounded() === true && cuberdon.body.position.x < this.player.x + 37){

        if(this.player.getHealth() > 8){
          this.player.damageCart();
          cuberdon.setSplattered();
        }else{
          this.player.playDeathAnimation();
          this.ground.bringToTop();
          setTimeout(() => { this.gameLost(); }, 400);
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

    this.background.destroy();
    this.ground.destroy();
    this.cuberdons.destroy();
    this.people.destroy();
    this.player.destroy();

  }

  personHitHandler(person, cuberdon){

    cuberdon.destroy();
    this.heartsScored += 1;

    if(person.getHasScored() === false){
      this.customers += 1;
    }

    this.updateScoreLabels();
    person.reset(person.x, person.y-4, -200, true);

    let heart = new Heart(this.game, person.x, person.y - 100);
    this.game.add.existing(heart);

  }

  generatePerson(){

    if(this.background.x > -5400){

      let personX = this.game.rnd.integerInRange(this.game.width + 80, this.game.width + 340);
      let personY = this.game.height - 120;
      let personFrame = this.game.rnd.integerInRange(1, 8);
      let personVelocity = this.game.rnd.integerInRange(-230, -170);

      while(personFrame === this.prevPersonFrame){
        personFrame = this.game.rnd.integerInRange(1, 8);
      }
      this.prevPersonFrame = personFrame;

      let person = new Person(this.game, personX, personY, personFrame);
      this.people.add(person, true);
      person.reset(personX, personY, personVelocity, false);

    }

  }

  throwCuberdon(highOrLow){

    if(!this.game.paused){

      let cuberdon = new Cuberdon(this.game, this.player.x - 60, this.player.y - 70);
      this.cuberdons.add(cuberdon);
      cuberdon.throw(highOrLow);

      if(this.player.getHealth() > 8){ this.player.bringToTop(); }

    }

  }

}
