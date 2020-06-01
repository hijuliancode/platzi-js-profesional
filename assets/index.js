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
MediaPlayer.prototype.togglePlay = function() {
  (this.media.paused)
    ? this.play()
    : this.pause()
  ;
}

const player = new MediaPlayer({ el: video })
button.onclick = () => player.togglePlay()
