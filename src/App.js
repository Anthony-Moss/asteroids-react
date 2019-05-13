import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Text } from 'react-konva';
import Spaceship from './components/Spaceship';
import Astroids from './components/Astroids';
import CreateAstroid from './components/AstroidsTest';
import Bullets from './components/Bullets';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        reatio: window.devicePixelRatio || 1,
      },
      text:'',
      score:0,
      asteroidCount: 1,
      inGame: false
    }
    this.spaceship = [];
    this.asteroids = [];
    this.bullets = [];
  }

    startGame() {
      this.setState({
        inGame: true,
        score: 0
      });
      let spaceship = new Spaceship({
        position: {
          x: this.state.screen.width/2,
          y: this.state.screen.height/2
        },
      });
    }
    
    
  
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text='Welcome To Asteroids!' />
          <Spaceship x={200} y={200}/>
          <Astroids />
          <Bullets />
          {/* <CreateAstroid /> */}
        </Layer>
      </Stage>
    );
  }
  
}

export default App;

// const DELTA = 4;

// window.addEventListener('keydown', (e) => {
//     if(e.keyCode === 37) {
//       Spaceship.x(Spaceship.x() - DELTA);
//     } else if (e.keyCode === 38) {
//       Spaceship.y(Spaceship.y() - DELTA);
//     } else if (e.keyCode === 39) {
//       Spaceship.x(Spaceship.x() + DELTA);
//     } else if (e.keyCode === 40) {
//       Spaceship.y(Spaceship.y() + DELTA);
//     } else {
//       return;
//     }
//     e.preventDefault();
//     window.batchDraw();
//   })