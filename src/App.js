import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Text, Animation, Wedge } from 'react-konva';
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
      score:0,      // for this depending on how far I get, this will go up per asteroid killed, just increase it in state by 10 or easier this would be like a counter and thats my score
      asteroidCount: 1,
      inGame: false,
      counter: 0,
      asteroids: [
      {
      },
      {

      },
      // {

      // },
    ],
    // because ill forget, spaceships is made as array of objects on purpose, its for lives
    // so dont just remove because it doesnt make sense 
    spaceship: [
      {
      },
    ],
    bullets: [
      {
      },
    ]
    }
  }

  // not sure exactly where to put it but I think for collision unless I can find an easier baked in method I should do something like 
  // detectCollision = () => {
    // map spaceship bullets and asteroids into arrays to get all coords
    // if asteroid.x = spaceship.x && asteroid.y = spaceship.y 
    // spaceship object is removed or game ends
    // same for bullets and asteroids except if collision asteroid and bullet disapear
  
  createBullet() {
    let bullets = this.state.bullets;
    if (this.state.keys.space === true) {
      bullets.push('1')
    }
  }


  handleKeyPress(value, e) {
    let keys = this.state.keys;
    if (e.keyCode === 37 || e.keyCode === 65) keys.left  = value;
    if(e.keyCode === 39 || e.keyCode === 68) keys.right = value;
    if(e.keyCode === 38 || e.keyCode === 87) keys.up = value;
    if(e.keyCode === 32) keys.space = value;
    this.setState({
      keys,
      bullets: [{}]
    });
  }
  

  componentDidMount() {
    console.log(this.state.asteroids)
    window.addEventListener('keyup', this.handleKeyPress.bind(this, false));
    window.addEventListener('keydown', this.handleKeyPress.bind(this, true));
    this.loop = requestAnimationFrame(this._doAnimation);
    // this.bullet = requestAnimationFrame(this._createBullet)
  }
  _doAnimation = () => {
    let newCounter = this.state.counter + 1;
    let newAsteroidCounter = this.state.counter + 1;
    console.log(newAsteroidCounter);
    let anAsteroid = [{}];
    let newAsteroids = this.state.asteroids;

     if (newCounter > 200) {
        newCounter = 0;
        newAsteroids.push({});
     }
     if (newAsteroidCounter > 600) {
     }
    this.setState({
      counter: newCounter,
    }, ()=> {
      requestAnimationFrame(this._doAnimation);
    });
  }

    // _createBullet() {
    //   console.log(this.state.bullets);
    // let newBullets = this.state.bullets;
    // if (this.state.keys.space === true) {
    //   newBullets.push('1')
    // }
    // this.setState({
    //   bullets: newBullets
    // }, () => {
    //   requestAnimationFrame(this._createBullet);
    // });
  // }
  

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeys);
    window.removeEventListener('keydown', this.handleKeys);
  }

  
  render() {
    let asteroids = this.state.asteroids.map(asteroid => {
      return <Asteroids counter={this.state.counter} width={this.state.screen.width} height={this.state.screen.height} ref={node => {
        this.asteroid = node;
      }}/>
    });
    let spaceship = this.state.spaceship.map(spaceship => {
      return <Spaceship rotation={65} counter={this.state.counter} width={this.state.screen.width} height={this.state.screen.height} keyPress={this.state.keys} ref={node => {
        this.spaceship = node;
      }}/>
    });
    // let bullets = this.state.bullets.map(bullet => {
    //   return <Bullets />
    // })
    return (
      <div tabIndex='0' onKeyDown={(event) => {
        // console.log(event.key)
      }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={`this is the counter ${this.state.counter}`} x={100} y={150} fontSize={30} fontFamily='Calibri' fill='green' color='white' />
          {asteroids}
          {spaceship}
        </Layer>
      </Stage>
      </div>
    );
  }
  
}

export default App;

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