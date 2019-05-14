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
            // ok so here I set my Astroids state? dafuck am I even doing here, like EXACTLY?
            // Like what is the difference between me doing the this.state = here and  shit fucking up but
            // in spaceship.js for some fuckin reason unlike everything we have done I said fuck the this
            // then outsite the constructore i set the state like state = {} da fuck am I doing? are these the same 
            // am I just losing my mind??? Shit atleast this music is fuckin lit
            numOfSides: getSides(),
            radiusSize: getRadius(),
            asteroids: [
                {
                    x: props.x,
                    y: props.y
                },
                {
                    x: props.x,
                    y: props.y
                },
                {
                    x: props.x,
                    y: props.y
                }
            ]
        }
        // How does props work, its just gives me an x and y, which I guess is semi expected because its for one specific asteroid
        // What the fuck am I even doing right now? Like this is so wrong, looking at props in dev tools shits so fucked
        console.log(`props x is ${this.props}`);
        // console.log(`state  is ${this.state.asteroids[0].x}`);
    }
    // Maybe im not thinking about this right, maybe think this approach - I need to set the 3 starting asteroids x and y, I can even hardcode the start
    // then incrementally(10 seconds or something) or if only one asteroid is left a new asteroid is generated at random coords



    // Hmmm Ok so  here I think I can do one of two things
    // 1) I can say state = {} or even array and then drill down then map the array of coords(asteroids)
    // 2) Make a Max number of asteroids and make the state have all of them, but the unused will be null until they are made
    // So like I could have 10 and literally set the state for each seperate one like below with the asteroids[key] method setup to follow  all asteroids

    // state = {
    //     x: this.state.asteroids[0].x,
    //     y: this.state.asteroids[0].y
    // }
    // I need to put my animation function here for asteriods, as soon as they are mounted they need to spin an move
    componentDidMount() {

    }
        
    render () {
        // are these in the wrong place? is that fucking everything up? What EXACTLY am I doing here? Especially inside the render why here?


        // console.log(asteroids);
        // console.log(numOfSides);
        // console.log(radiusSize);
        // console.log(`state is ${this.}`)
        // console.log(this.props.x);
        // console.log(this.props.y);
        return (
        
            <RegularPolygon
            // this x and y is what ends up getting rendered when I have the hardcoded asteroids
            x={this.props.x}
            y={this.props.y}
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