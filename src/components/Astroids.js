import React from 'react';
import Konva from 'konva';
import { Line, RegularPolygon, Layer, Text } from 'react-konva';

class Astroids extends React.Component {
    constructor(props) {
        super(props);
        console.log(`props are ${props}`);
        function getSides() {
            let min = 5;
            let max = 10;
            let sides = Math.floor(Math.random() * (max - min + 1) + min);
            return sides
        };

        function getRadius() {
            let min = 15;
            let max = 40;
            let radius = Math.floor(Math.random() * (max - min + 1) + min);
            return radius
        };

        function getSpeed() {
            let min = .5;
            let max = 6;
            let speed = Math.random() * (max - min + 1) + min;
            return speed
        };

        function getCycle() {
            let min = 33;
            let max = 66;
            let cycle = Math.floor(Math.random() * (max - min + 1) + min);
            return cycle
        };
        
        function getX() {
            let max = props.width - 75;
            let min = 75;
            let newX = Math.floor(Math.random() * (max - min + 1) + min);
            return newX
        }

        function getY() {
            let max = props.height - 75;
            let min = 75;
            let newY = Math.floor(Math.random() * (max - min + 1) + min);
            return newY
        }

        // I can probably just use this one function here or probably 2, one for whole one for floats
        function getRandomNum(max, min) {
            let number = Math.floor(Math.random() * (max - min + 1) + min);
        }

        this.state={
            numOfSides: getSides(),
            radiusSize: getRadius(),
            x: getX(),
            y: getY(),
            speed: getSpeed(),
            cycle: getCycle()
        }
    }
    
static getDerivedStateFromProps(props, state){
        let counter = props.counter
        // console.log(counter);
        let width = props.width
        let height = props.height
        // console.log(width)
        let directions = {
        0: {
            x: state.x + state.speed + .5,
            y: state.y + state.speed + 1
            },
        1: {
            x: state.x - state.speed -.5,
            y: state.y + state.speed + .4
        },
        2: {
            x: state.x + state.speed + 1,
            y: state.y - state.speed - 2
        },
        3: {
            x: state.x - state.speed - 1.5,
            y: state.y - state.speed - 2
        }
    }
    // handle the width bounds
    if(state.x > width){
        return state.x = 0 + state.speed;
    } else if(state.x < 0) {
        return state.x = width;
    }
    // handle the height bounds
    if(state.y > height) {
        return state.y = 0 + state.speed;
    } else if(state.y < 0) {
        return state.y = height;
    }

    if (counter <= state.cycle) {
        return directions[0]
    } else if (counter >state.cycle && counter <state.cycle*2){
        return directions[1]
    } else if (counter > state.cycle*2 && counter < state.cycle*3){
        return directions[2]
    } else {
        return directions[3]
    }
    }

    componentDidMount() {
        let angularSpeed = 90;
        this.anim = new Konva.Animation(frame => {
        let angleDiff = (frame.timeDiff * angularSpeed) / 1000;
        this.asteroid.rotate(angleDiff);
        }, this.asteroid.getLayer());
        this.anim.start();
  }
      
        
    render () {
        // console.log(this.props.counter);
        return (
        
            <RegularPolygon
            // this x and y is what ends up getting rendered when I have the hardcoded asteroids
            x={this.state.x}
            y={this.state.y}
            sides={this.state.numOfSides} 
            radius={this.state.radiusSize}
            fill='#282c34'
            stroke='grey'
            strokeWidth={2}
            shadowColor= {'white'}
            shadowBlur={6}
            ref={node => {
                this.asteroid = node;
            }}
            onClick={this.addAsteroid}
            />
            
        )
    }
}

export default Astroids;