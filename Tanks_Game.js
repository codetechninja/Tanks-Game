let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {Y: 200}
        }
    },
    scene:[game_scene_1]
};

var Tank;
var TankBarrel;
var TargetBoards;

let game = new Phaser.Game(config)


