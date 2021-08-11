
export default class MainScene extends Phaser.Scene {

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {
    this.load.image('hero','assets/hero/knight.png');
    this.load.spritesheet('idle-sprite', 'assets/hero/idle.png', {frameWidth:171, frameHeight:128});
  }

  create() {
    this.anims.create({
      key:'idle-anim' , 
      frames:[
          {frame:0, key:'hero', duration: 5000},
          ...this.anims.generateFrameNumbers('idle-sprite', {})
      ],
      frameRate:6,
      repeat:-1
    });
    let hero = this.physics.add.sprite(171 , 128, 'hero');
    hero.body.setCollideWorldBounds(true);

    hero.body.setSize(30 , 52);
    hero.body.setOffset(70 , 57 );
    hero.anims.play('idle-anim');

    this.cameras.main.fadeIn();
   
      // remove the loading screen
    let loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('transparent');
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          // @ts-ignore
          loadingScreen.remove();
        }
      });
    }

  }

  update() {

  }
}
