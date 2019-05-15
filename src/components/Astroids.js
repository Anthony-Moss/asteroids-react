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
        }
        function getRadius() {
            let min = 10;
            let max = 40;
            let radius = Math.floor(Math.random() * (max - min + 1) + min);
            return radius
        }
        function getSpeed() {
            let min = 1;
            let max = 8;
            let radius = Math.floor(Math.random() * (max - min + 1) + min);
            return radius
        }
        function getCycle() {
            let min = 33;
            let max = 66;
            let radius = Math.floor(Math.random() * (max - min + 1) + min);
            return radius
        }

        this.state={
            numOfSides: getSides(),
            radiusSize: getRadius(),
            x: 50,
            y: 50,
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
            x: state.x + state.speed,
            y: state.y + state.speed
            },
        1: {
            x: state.x - state.speed,
            y: state.y + state.speed
        },
        2: {
            x: state.x + state.speed,
            y: state.y - state.speed
        },
        3: {
            x: state.x - state.speed,
            y: state.y - state.speed
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
            ref={node => {
                this.asteroid = node;
            }}
            onClick={this.addAsteroid}
            />
            
        )
    }
}

export default Astroids;