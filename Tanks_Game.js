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


let game = new Phaser.Game(config)


let turrent1, turrent2;
let target = 0;
let ROTATION_SPEED = Math.PI / 60; // per update