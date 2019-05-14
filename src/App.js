import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Text, Animation } from 'react-konva';
import Spaceship from './components/Spaceship';
import Asteroids from './components/Astroids';
import Bullets from './components/Bullets';

// Do I need to have the components stuff inside state? Like a current cache of the ships info and all asteroid info?
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      keys: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        space: 0
      },
      text:'',
      score:0,
      asteroidCount: 1,
      inGame: false,
      counter: 0,
      asteroids: [
      {
          x: 200,
          y: 200
      }
    ]
    }
    this.spaceship = [];
    // problem is with the hard coding, I need to be  carrying values
    // cant just thing of these  as one object being moved but rather an object object being drawn at certain times
    // Also I am having trouble whenever I  do setState I rerender all componennts but thats not REACTive I should be able to refresh
    // only certain components which is not happening currently with how im setting it all up
    // im not using the .layer, I for some reason cant understand any of these fucking docs
    
    this.bullets = [];

    
  }
  
  handleKeyPress(value, e) {
    let asteroids = this.asteroids;
    let keys = this.state.keys;
    if (e.keyCode === 37 || e.keyCode === 65) keys.left  = value;
    if(e.keyCode === 39 || e.keyCode === 68) keys.right = value;
    if(e.keyCode === 38 || e.keyCode === 87) keys.up = value;
    if(e.keyCode === 32) keys.space = value;
    this.setState({
      keys
    });
    // this.keys.cache();
    // console.log(asteroids);
  }
  

  componentDidMount() {
  // const DELTA = 4;

    window.addEventListener('keyup', this.handleKeyPress.bind(this, false));
    window.addEventListener('keydown', this.handleKeyPress.bind(this, true));
    this.loop = requestAnimationFrame(this._doAnimation)
  }

  _doAnimation = () => {
    let newCounter = this.state.counter + 1;
     if (newCounter > 200) {
       newCounter = 0;
     }
    this.setState({
      // asteroids: newAsteroids,
      counter: newCounter
    }, ()=> {
      requestAnimationFrame(this._doAnimation);
    });
  }
  

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeys);
    window.removeEventListener('keydown', this.handleKeys);
  }

  
  render() {
    let asteroids = this.state.asteroids.map(coords => {
      return <Asteroids counter={this.state.counter} ref={node => {
        this.asteroid = node;
    }}/>
    })
    // console.log(asteroids);
    return (
      <div tabIndex='0' onKeyDown={(event) => {
        // console.log(event.key)
      }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={`this is the counter ${this.state.counter}`} x={100} y={150} fontSize={30} fontFamily='Calibri' fill='green' color='white' />
          {asteroids}
        </Layer>
      </Stage>
      </div>
    );
  }
  
}

export default App;




  // window.addEventListener('keydown', (e) => {
  //   let keys = this.state.keys;
  //     if(e.keyCode === 37) {
  //       keys.left = value;
  //     } else if (e.keyCode === 38) {
  //       keys.right = value;
  //     } else if (e.keyCode === 39) {
  //       keys.up = value;
  //     } else if (e.keyCode === 40) {
  //       keys.space = value;
  //     } else {
  //       return;
  //     }
  //     e.preventDefault();
  //     window.batchDraw();
  //   })



    // componentDidMount() {
  //   let angularSpeed = 90;
  //   this.anim = new Konva.Animation(frame => {
  //     let angleDiff = (frame.timeDiff * angularSpeed) / 1000;
  //     this.asteroids.rotate(angleDiff);
  //   }, this.asteroids.getLayer());
  //   this.anim.start();
  // }

     // startGame() {
    //   this.setState({
    //     inGame: true,
    //     score: 0
    //   });
    //   let spaceship = new Spaceship({
    //     position: {
    //       x: this.state.screen.width/2,
    //       y: this.state.screen.height/2
    //     },
    //   });
    // }


        // let tween = new Konva.Tween({
    //   node: rect,
    //   duration: 1,
    //   x: 140,
    //   y: 90,
    //   fill: 'red',
    //   rotation: Math.PI * 180,
    //   opacity: 1,
    //   strokeWidth: 6,
    //   scaleX: 1.5
    // });

        // // start tween after 2 seconds
    // setTimeout(function() {
    //   tween.play();
    // }, 2000);