
export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {
    this.load.image('hero','assets/hero/knight.png');
  }
  create() {
    let hero=this.physics.add.sprite(171 , 128, 'hero');
    hero.body.setCollideWorldBounds(true);

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
