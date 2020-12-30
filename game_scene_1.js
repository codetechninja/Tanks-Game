class game_scene_1 extends Phaser.Scene {

    constructor()
    {
        super({key:"game_scene_1"});
    }

    preload()
    {
        this.load.image('Background','assets/Background.png');
        this.load.image('flame', 'assets/flame.png');
        this.load.image('target_board', 'assets/target_board.png');
        this.load.image('tank', 'assets/tank.png');
        this.load.image('turret', 'assets/turret.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.image('platform', 'assets/platform.png');
    }
    create()
    {
        //Background
        this.images = this.add.image(400,300,'Background');

        this.createTargets();
        this.createPlatforms();
        //this.createPlayer();


        var turret = this.add.image(118, 473, 'turret');
        var tank = this.add.image(100, 475, 'tank');
        var angle = 0;



        this.input.on('pointermove', function(pointer){
            angle = Phaser.Math.Angle.BetweenPoints(tank, pointer);
            turret.rotation = angle;
        }, this);


    }
    createTargets()
    {
        const target = this.physics.add.staticGroup()
        this.add.image(600, 390, 'target_board');
        this.add.image(650, 390, 'target_board');
        this.add.image(700, 390, 'target_board');
        this.add.image(750, 390, 'target_board');
    }
    createPlatforms()
    {
        const target = this.physics.add.staticGroup()
        this.add.image(100,500, 'platform')
    }
    /*createPlayer()
    {
        //  The body of the tank
        this.tank = this.add.sprite(100, 475, 'tank');

        //  The turret which we rotate (offset 30x14 from the tank)
        this.turret = this.add.sprite(this.tank.x + 18, this.tank.y - 2, 'turret');
    }*/


    update()
    {

    }




}