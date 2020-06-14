function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || []

  this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this)
  })
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
MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}
MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}

export default MediaPlayer
