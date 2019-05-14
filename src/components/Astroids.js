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

        this.state={
            numOfSides: getSides(),
            radiusSize: getRadius(),
            
                    x: 50,
                    y: 50
        }
    }
    
static getDerivedStateFromProps(props, state){
        let counter = props.counter
        // console.log(counter);
        let directions = {
        0: {
            x: state.x + 1,
            y: state.y + 1
            },
        1: {
            x: state.x - 1,
            y: state.y + 1
        },
        2: {
            x: state.x + 1,
            y: state.y - 1
        },
        3: {
            x: state.x - 1,
            y: state.y - 1
        }
    }
    
    if (counter <= 50) {
        return directions[0]
    } else if (counter >50 && counter <100){
      return directions[1]
    } else if (counter > 100 && counter < 150){
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





        // addAsteroid = () => {
        //     const {innerWidth, innerHeight} = window;
        //     for (let i = 0; i < 10; i ++) {
        //         const j = Math.round(Math.random())
        //         const newRect = <rect ref={node => {
        //         node.to({
        //         x: innerWidth/2,
        //         y: innerHeight/2,
        //         duration: 1.0
        //         });
        //     }


            // addAsteroid = () => {
    //     const {innerWidth, innerHeight} = window;
    //     const newAsteroid = <RegularPolygon ref={node => {
    //         this.RegularPolygon = node;
    //     }}
    //     x={100}
    //     y={100}
    //     sides={6}
    //     radius={30}
    //     fill='red'
    //     stroke='grey'
    //     strokeWidth={2}
    //     />
    //     // layer.add(newAsteroid);
    //     };