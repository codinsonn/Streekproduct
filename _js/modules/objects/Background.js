'use strict';

export default class Background extends Phaser.Group {

  constructor(game, x, y) {

    super(game);

    this.height = 650;
    this.width = 7000;
    this.x = x;
    this.y = y;

    this.add(this.game.add.sprite(456, 520, 'tree'));
    this.add(this.game.add.sprite(553, 440, 'housesmall'));
    this.add(this.game.add.sprite(737, 413, 'houselarge'));
    this.add(this.game.add.sprite(1075, 393, 'fronthouse'));
    this.add(this.game.add.sprite(1427, 520, 'tree'));
    this.add(this.game.add.sprite(1575, 440, 'housesmall'));
    this.add(this.game.add.sprite(1765, 520, 'tree'));
    this.add(this.game.add.sprite(1880, 55, 'gravensteen'));
    this.add(this.game.add.sprite(1866, 520, 'tree'));
    this.add(this.game.add.sprite(2580, 520, 'tree'));
    this.add(this.game.add.sprite(3248, 413, 'houselarge'));
    this.add(this.game.add.sprite(3016, 520, 'tree'));
    this.add(this.game.add.sprite(3432, 440, 'housesmall'));
    this.add(this.game.add.sprite(3535, 520, 'tree'));
    this.add(this.game.add.sprite(3696, 60, 'basilic'));
    this.add(this.game.add.sprite(3952, 520, 'tree'));
    this.add(this.game.add.sprite(4027, 520, 'tree'));
    this.add(this.game.add.sprite(4217, 520, 'tree'));
    this.add(this.game.add.sprite(4307, 440, 'housesmall'));
    this.add(this.game.add.sprite(4583, 350, 'houseside'));
    this.add(this.game.add.sprite(4897, 520, 'tree'));
    this.add(this.game.add.sprite(5043, 393, 'fronthouse'));
    this.add(this.game.add.sprite(5570, 440, 'housesmall'));
    this.add(this.game.add.sprite(5920, 440, 'housesmall'));
    this.add(this.game.add.sprite(5740, 413, 'housecolored'));
    this.add(this.game.add.sprite(6000, 520, 'tree'));
    this.add(this.game.add.sprite(6225, 535, 'neuzekesland'));
    this.add(this.game.add.sprite(6470, 520, 'tree'));
    this.add(this.game.add.sprite(6660, 520, 'tree'));
    this.add(this.game.add.sprite(6700, 520, 'tree'));

  }

  update() {

    if(this.x > -5600){
      this.x -= 1;
    }

  }

}
