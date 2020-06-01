const video = document.querySelector('video')
const button = document.querySelector('button')
let played = false

function MediaPlayer(config) {
  this.media = config.el
}

MediaPlayer.prototype.play = function() {
  console.log('play')
  played = true
  this.media.play()
}
MediaPlayer.prototype.pause = function() {
  console.log('pause')
  played = false
  this.media.pause()
}

const player = new MediaPlayer({ el: video })
button.onclick = () => played ? player.pause() : player.play()
