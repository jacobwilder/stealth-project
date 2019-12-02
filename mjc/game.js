var config = {
    type:Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    physics: {
        default:"matter",
        matter: {
            gravity: {y: 0},
            debug: true
        }
    },
    scene: [ Example1]
};

var game = new Phaser.Game(config);

var player;
var youLose = false;
var cameraSpin;