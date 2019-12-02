class Example1 extends Phaser.Scene {
    constructor() {
        super(
            { key: "Example1" });
    }

    preload() {
        this.load.image("player", "assets/player.png")
        this.load.image("dart", "assets/dart.png")
        //this.load.image("camera", "assets/sprite-camera.png")
        this.load.atlas("sheet", "assets/camera.png", "assets/camerasprite.json"); // load texture packer sprites
        this.load.json("shapes", 'assets/camerashape.json'); //load physicseditor body shape
    }

    create() {
        this.matter.world.setBounds(0, 0, game.config.width, game.config.height);
        player = this.matter.add.sprite(50, 400, "player");
        var shapes = this.cache.json.get('shapes'); // shape of cone rather than entire sprite including camera
        let cameraVar = this.matter.add.sprite(200, 400, 'sheet', 'camera', { shape: shapes.camera });
        
        // sets behavior for collisions
        var cat1 = this.matter.world.nextCategory();
        cameraVar.setCollisionCategory(cat1);
        player.setCollidesWith([ cat1]);
        console.log(cameraVar);
        cameraVar.setOrigin(0.5, 0);

        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
            // game over when you die
            youLose = this.scene.add.text(300, 300, 'YOU LOSE', { fontSize: '50px', fill: 'white' })
            //Matter.Composite.remove(world, body)
        });

        // create camera group
        //this.cameras = this.matter.add.group();

        // group to move all the cameras
        cameraSpin = this.tweens.add({
            targets: cameraVar,
            angle: 80,
            duration: 3000,
            rotation: 1.8,
            yoyo: true,
            repeat: -1,
        });

        
        //Phaser.Physics.Matter.Matter.Body.setAngularVelocity(shapes, 50)
        //this.Matter.rotate(4, 120);
        // Phaser.Physics.Matter.Matter.Body.rotate(shapes, .5);
        // cameraVar.setRotation(.5, 0);
        // cameraVar.setPosition({x: 200, y: 150});
        //cameraVar.rotate(5, 2);

        // make compound body move up and down and rotate constantly
        // cameraVar.setVelocity(compound, { x: 0, y: py - compound.position.y });
        // Body.setAngularVelocity(compound, 0.02);
        // Body.setPosition(compound, { x: 600, y: py });
        //Matter.cameraVar.rotate(cameraVar, 2);

        //cameraVar.setOrigin(0.5, 0);

        let offset= {
            x:0,
            y: cameraVar.height/1.4
        }

         let body = cameraVar.body;
         //body.position.x -= offset.x;
         body.position.y -= offset.y;
         //body.positionPrev.x -= offset.x;
         body.positionPrev.y -= offset.y;

        // var bar = '0 0 0 240 20 240 20 0';

        


        // add enclosing side bars
        // var poly = this.add.polygon(420, 300, bar, 0x00ffff, 0.2);
        // this.matter.add.gameObject(poly, {
        //     shape: { type: 'fromVerts', verts: bar, flagInternal: true },
        //     isStatic: true,
        //     angle: 0.3
        // }
        // );
        // this.matterCollision.addOnCollideStart({
        //     objectA: player,
        //     objectB: cameraVar,
        //     callback: () => console.log("Player spotted!")
        //   });
        // cameras as a group
        // this.cameras = this.physics.add.group();

        // Add the camera image without cone
        // this.cameras.create(400, 400, 'camCone').setOrigin(.5, 0.);
        // this.cameras.create(70, 200, 'camCone').setOrigin(0.5, 0);
        // this.cameras.create(700, 300, 'camCone').setOrigin(0.5, 0);
        // this.cameras.create(115, 500, 'camCone').setOrigin(0.5, 0);
        // this.cameras.create(200, 50, 'camCone').setOrigin(0.5, 0);
        // this.cameras.create(470, 100, 'camCone').setOrigin(0.5, 0);

        // gameState.hero.setOrigin(0.5, 0);

        // let offset = {
        //     x: 0,
        //     y: -gameState.hero.height / 2
        // }

        // let body = gameState.hero.body;
        // body.position.x += offset.x;
        // body.position.y += offset.y;
        // body.positionPrev.x += offset.x;
        // body.positionPrev.y += offset.y;
        // Phaser.Actions.Call(cameraVar, (function (context) {
        //     return function (rotate) {
        //         context.tweens.add({
        //             targets: rotate,
        //             //y:rotate.y+90,
        //             //x:rotate.x+90,

        //             rotation: 1.5,
        //             yoyo: true,
        //             duration: 3000,
        //             repeat: -1
        //         });
        //     }
        // })(this)
        // );



        // this.camera = this.physics.add.image(200, 100, "camera");
        // this.camera.setScale(5);
        //this.camera.setOrigin(0.5);

        // add camera with cone
        //this.camCone = this.physics.add.image(300,400, "camCone");

        // add player and set movement boundaries 
        //this.matter.world.setBounds(0, -200, this.sys.game.config.width, this.sys.game.config.height + 200);

        // player.setCollideWorldBounds(true);

        // Collision between player and camera sprite destroys player
        // this.physics.add.collider(player, this.cameras.getChildren(), function (player, camera) {
        //     player.destroy();
        //     youLose.visible = true; // show gameover text
        // });

        /* Left */
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.input.on("pointerdown", function (event) {
            player.x = event.x;
            player.y = event.y;
        }, this);

        /* Up */
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.input.on("pointerdown", function (event) {
            player.x = event.x;
            player.y = event.y;
        }, this);

        /* Right */
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.input.on("pointerdown", function (event) {
            player.x = event.x;
            player.y = event.y;
        }, this);

        /* Down */
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.input.on("pointerdown", function (event) {
            player.x = event.x;
            player.y = event.y;
        }, this);

        /* Fire when you press P */
        this.input.keyboard.on("keyup_P", function (event) {
            var dart = this.matter.add.image(player.x, player.y, "dart");
            dart.setVelocity(Phaser.Math.RND.integerInRange(40, 40), -360);
        }, this);

        /* Scene Two and Three */
        // this.input.keyboard.on("keyup", function (e) {
        //     if (e.key === "2") {
        //         this.scene.start("Example2");
        //     }
        //     if (e.key === "3") {
        //         this.scene.start("Example3");
        //     }
        // }, this);

    }
    update() {
        //console.log(didLose);
        if (this.key_A.isDown) /* Left */
            player.x--;
        if (this.key_W.isDown) /* Up */
            player.y--;
        if (this.key_S.isDown) /* Down */
            player.y++;
        if (this.key_D.isDown) /* Right */
            player.x++;

        // Set limits to the camera rotation so it doesn't do a full 360 spin
        // cameraInterval var starts at 0 and turns clockwise until 150, then changes direction
        // Because it's part of update() this checks every frame

        // if (cameraInterval < 150) {
        //     this.cameras.getChildren().angle += .5
        //     // this.camera.angle += .5 // clockwise turn
        //     // this.camCone.angle += .5
        //     cameraInterval++
        // }
        // if (cameraInterval >= 150) {
        //     this.cameras.getChildren().angle -= .5
        //     // this.camera.angle -= .5 //counterclockwise turn
        //     // this.camCone.angle -= .5
        //     cameraInterval++

        //     if (cameraInterval === 300) { // Once 300 frames pass set the interval back to 0
        //         cameraInterval = 0
        //      }
        // }
        // if (didLose === true) {
        //     this.scene.start("YouLose");
        // }
    }
}