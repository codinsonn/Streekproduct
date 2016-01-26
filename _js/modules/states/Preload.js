'use strict';

export default class Preload extends Phaser.State {

  preload() {

    this.asset = this.add.sprite(this.game.width*0.6, this.game.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.game.load.image('groundtile', 'assets/img/game/CityGroundTile.png');
    this.game.load.image('cuberdon', 'assets/img/game/Cuberdon.png');
    this.game.load.image('heart', 'assets/img/game/Heart.png');

    this.game.load.image('basilic', 'assets/img/game/background/Basilic.png');
    this.game.load.image('fronthouse', 'assets/img/game/background/FrontHouse.png');
    this.game.load.image('neuzekesland', 'assets/img/game/background/GentNeuzenLand.png');
    this.game.load.image('gravensteen', 'assets/img/game/background/GravenSteen.png');
    this.game.load.image('housecolored', 'assets/img/game/background/HouseColored.png');
    this.game.load.image('housesmall', 'assets/img/game/background/HouseSmall.png');
    this.game.load.image('houselarge', 'assets/img/game/background/HouseLarge.png');
    this.game.load.image('houseside', 'assets/img/game/background/SideHouse.png');
    this.game.load.image('tree', 'assets/img/game/background/Tree.png');

    this.load.spritesheet('player', 'assets/img/game/CharacterAnim.png', 240, 180, 12);
    this.load.spritesheet('people', 'assets/img/game/PeopleSpritesheet.png', 42, 150, 4);

  }

  create() {

  }

  update() {

  }

  onLoadComplete() {
    this.game.state.start('Play');
  }

}
