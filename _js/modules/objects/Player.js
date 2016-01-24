'use strict';

let MIN_POS = 320;
let MAX_POS = 500;

export default class Player extends Phaser.Sprite {

  constructor(game, x, y, frame) {

    super(game, x, y, 'player', frame);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.health = 100;
    this.animating = false;

    this.$healthbar = document.querySelector('.healthbar');
    this.$health = document.querySelector('.remainingHealth');

    this.anchor.setTo(0.5, 0.5);
    this.animations.add('drive');
    this.animations.play('drive', 16, true);

  }

  update() {

    //Make the player go left
    if(this.cursors.left.isDown && this.x >= MIN_POS){
      this.x += -1;
    }

    //Make the player go right
    if(this.cursors.right.isDown && this.x <= MAX_POS){
      this.x += 1;
    }

    //Make healthbar fade if visible (and above 50%)
    if(this.health >= 50 && this.$healthbar.style.opacity >= 0.01){
      this.$healthbar.style.opacity = this.$healthbar.style.opacity - 0.01;
    }

    //Animate death animation
    if(this.health <= 0){
      this.x += -3;
    }

  }

  damageCart() {

    this.health += -8;
    this.updateHealthbar();
    this.playSlipAnimation();

  }

  getHealth() {
    return this.health;
  }

  updateHealthbar() {

    this.$healthbar.style.opacity = 1;
    this.$health.style.width = `${this.health}%`;

  }

  playSlipAnimation() {

    if(this.animating === false){

      this.game.add.tween(this).to({angle: 2}, 300).start();
      this.animating = true;

      setTimeout(() => {
        this.game.add.tween(this).to({angle: -1}, 400).start();
      }, 300);

      setTimeout(() => {
        this.game.add.tween(this).to({angle: 0}, 200).start();
        this.animating = false;
      }, 800);

    }

  }

  playDeathAnimation() {

    this.health = 0;
    this.updateHealthbar();

    this.game.add.tween(this).to({angle: 40}, 1000).start();

    this.game.physics.arcade.enableBody(this);
    this.body.gravity.y = 2000;
    //this.body.velocity.y = 0;
    this.body.velocity.x = 100;

  }

}
