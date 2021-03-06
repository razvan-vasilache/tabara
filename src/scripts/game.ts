import 'phaser'
import MainScene from './scenes/mainScene'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
render: {
  pixelArt: true
},

  scene: [MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: true,
      debugShowVelocity: true,
      debugShowBody: true,
      debugShowStaticBody: true
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
