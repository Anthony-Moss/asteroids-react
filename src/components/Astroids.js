import React from 'react';
import Konva from 'konva';
import { Line, RegularPolygon, Layer } from 'react-konva';

class Astroids extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            astroids: []
        }
    }
    addAsteroid = () => {
        const {innerWidth, innerHeight} = window;
        const newAsteroid = <RegularPolygon ref={node => {
            this.RegularPolygon = node;
        }}
        x={100}
        y={100}
        sides={6}
        radius={30}
        fill='red'
        stroke='grey'
        strokeWidth={2}
        />
        // layer.add(newAsteroid);
        };
    

        
    render () {
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
        let numOfSides = getSides();
        let radiusSize = getRadius();
        // console.log(numOfSides);
        // console.log(radiusSize);
        return (
            <RegularPolygon 
            x={100}
            y={100}
            sides={numOfSides}
            radius={radiusSize}
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