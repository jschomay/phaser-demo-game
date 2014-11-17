var game = new Phaser.Game(800,600, Phaser.AUTO, 'phaser-demo', {preload: preload, create: create, update: update, render: render});

var player;
var starfield;

function preload() {
    game.load.image('starfield', 'https://raw.githubusercontent.com/jschomay/phaser-demo-game/master/assets/starfield.png');
    game.load.image('ship', 'https://raw.githubusercontent.com/jschomay/phaser-demo-game/master/assets/player.png');
}

function create() {
    //  The scrolling starfield background
    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');

    //  The hero!
    player = game.add.sprite(400, 500, 'ship');
    player.anchor.setTo(0.5, 0.5);
}

function update() {
    //  Scroll the background
    starfield.tilePosition.y += 2;

}

function render() {

}

