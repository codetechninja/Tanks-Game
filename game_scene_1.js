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





        Tank = this.physics.add.sprite(100, 475, 'tank');
        TankBarrel = this.physics.add.sprite(118, 470, 'turret')
            .setOrigin(0 ,0.2);
        Tank.setCollideWorldBounds(true);
        var angle = 0;
        var gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0x922B21, alpha: 0.5 } });
        var line = new Phaser.Geom.Line();



        this.input.on('pointermove', function(pointer){
            angle = Phaser.Math.Angle.BetweenPoints(Tank, pointer);
            TankBarrel.rotation = Phaser.Math.Clamp(angle, -Math.PI* 3.141, Math.PI *0)
            Phaser.Geom.Line.SetToAngle(line, Tank.x, Tank.y - 5, angle, 128);
            gfx.clear().strokeLineShape(line);
        }, this);

        this.keys = this.input.keyboard.addKeys('LEFT,RIGHT,A, D');


1

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



    update()
    {
        if(this.keys.A.isDown)
        {
            Tank.setVelocityX(-50);
            TankBarrel.setVelocityX(-50);
        }
        else if(this.keys.D.isDown)
        {
            Tank.setVelocityX(50);
            TankBarrel.setVelocityX(50);
        }
        else
        {
            Tank.setVelocityX(0);
            TankBarrel.setVelocityX(0);
        }



    }




}