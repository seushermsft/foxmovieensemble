import React, { Component } from 'react';
import './App.css';
import ReactPlayer from 'react-player'

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

 
class App extends Component {
  state = {
    played: 0,
    loaded: 0,
    playing: true,
    url: null,
    volume: 0.8,
    loop: true,
    duration: 0,
    playbackRate: 1.0,

  }

  // load = url => {
  //   this.setState({
  //     url,
  //     played: 0,
  //     loaded: 0
  //   })
  // }

  playPause () {
   console.log("hi")
  }

  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  setPlaybackRateSlow = () => {
    this.setState({ playingbackRate: 1.5 })
  }

  setPlaybackRateFast = () => {
    this.setState({ playingbackRate: 2 })
  }

  onProgress = (state: { playedSeconds: number }) => {
    // console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    //var canvas : any = document.getElementById("mycanvas");
    var canvas : any = this.refs.boundingBoxCanvas
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,150,100);
    ctx.fillRect(state.playedSeconds,0,150,100);
    ctx.fillStyle="#FF0000";
  }

  // onDuration = (duration) => {
  //   console.log('onDuration', duration)
  //   this.setState({ duration })
  // }

  setPlaybackRateFast2(e: number) {
    console.log(e)
    //this.refs.video.props as Play.playbackRate = 100;
    this.state.playbackRate = e;
    this.setState({ playingbackRate: e })
  }

  render() {
    const { url, playing, volume, loaded, duration, playbackRate, played } = this.state

    return (
      <div className ='app'>
        <section className='section'>
          <div id="title">
            <h1>ReactPlayer Demo</h1>
          </div>
          <div className='player-wrapper'>
            <div id="base">
            <ReactPlayer
                  className = 'react-player'
                  url = {sources.sintelTrailer} //'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                  playing = {playing}
                  volume = {volume}
                  playbackRate = {playbackRate}
                  onProgress={this.onProgress}
                  //onDuration ={this.onDuration}
                  ref="video"
              />
            </div>
            <div id="overlay">
              <canvas ref="boundingBoxCanvas"></canvas>
            </div>
          </div>
          <table id="controls">
            <tbody>
            <tr>
                <td>
                  <button onClick={this.playPause}> Play Pause Button</button>
                  <button onClick={this.onPause}> Pause</button>
                  <button onClick={this.onPlay}> Play</button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h6>Playback Speed</h6>
                  <button onClick={this.setPlaybackRateSlow} value ={.5}>.5</button>
                  <button onClick={() => this.setPlaybackRateFast2(3)}>1.5</button>
                </td>
              </tr>
            </tbody>
            
            <tbody>
              <tr>
                <th>
                  <h2>State </h2>
                </th>
              </tr>
              <tr>
                <th>Seconds Elapsed:</th>
                <td>{loaded}</td>
              </tr>
              <tr>
                <th>Time Remaining:</th>
                <td>{played}</td>
              </tr>
            </tbody>
          </table>
        </section>      
      </div>
    ) 
  }
}


export default App;
