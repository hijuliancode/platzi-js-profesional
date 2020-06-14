import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'

const video = document.querySelector('video')
const buttonPlay = document.getElementById('togglePlay')
const buttonMute = document.getElementById('toggleMute')

const player = new MediaPlayer({ el: video , plugins: [ new Autoplay() ]})

buttonPlay.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()
