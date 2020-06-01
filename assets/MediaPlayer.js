function MediaPlayer(config) {
  this.media = config.el
}

MediaPlayer.prototype.play = function() {
  console.log('play')
  this.media.play()
}
MediaPlayer.prototype.pause = function() {
  console.log('pause')
  this.media.pause()
}
MediaPlayer.prototype.togglePlay = function() {
  (this.media.paused)
    ? this.play()
    : this.pause()
  ;
}

export default MediaPlayer