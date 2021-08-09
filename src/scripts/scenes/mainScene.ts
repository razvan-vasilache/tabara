
export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
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
