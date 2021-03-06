import React from 'react';
import Konva from 'konva';
import { Wedge } from 'react-konva';


// this represents the players ship 
class Spaceship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 200,
            y: 200,
            radius: 30,
            fill: 'orange',
            stroke: 'grey',
            strokeWidth: 1,
            angle: 50,
            rotation: 65,
            speed: 5,
            keys: props.keyPress

        }
    }
    
    static getDerivedStateFromProps(props, state) {
        // let counter = props.counter;
        let width = props.width;
        let height = props.height;
        let keyValue = props.keyPress;
        let rotation = state.rotation;
        
        if(state.x > width){
            return {x: 0};
        } else if(state.x < 0) {
            return {x: width}
        };

        // handle the height bounds
        if(state.y > height) {
            return {y: 0};
        } else if(state.y < 0) {
            return {y: height};
        }

        // if (state.rotation < 180 && state.rotation > -180) {
            if (keyValue.left) {
                let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
                let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
                if (keyValue.up) {
                    return {rotation: rotation - 6, x: x, y: y}
            } else {
                return {rotation: rotation - 6}
            }
        }
         
        if (keyValue.right) {
            let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
            let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
            if (keyValue.up) {
            return {rotation: rotation + 6, x: x, y: y}
            } else {
                return {rotation: rotation + 6}
            }
        }
        
        // console.log(keyValue.up);
        if (keyValue.up) {
            if (keyValue.left) {
            let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
            let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
                // let rotation = {rotation: rotation - 7}
                return { x: x, y: y, rotation: rotation - 6}
            } else {
                let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
                let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
                return {
                    x,
                    y
                }
            }; 
        }
// //          can I import bullets class into spaceship and then create new bullets?
//         if (keyValue.space) {
//             let x = state.x;
//             let y = state.y;
//             // create bullet at x,y
//             let newBullet = new Konva.Tween({
//                 node: bullet,
//                 duration: 5,
//                 x: x,
//                 y: y,
//                 fill: 'red',
//                 rotation: Math.PI * 180,
//                 opacity: 1,
//                 strokeWidth: 6,
//                 scaleX: 1.5
//                 });

//                     // start tween after 2 seconds
//                 setTimeout(function() {
//                 newBullet.play();
//                 }, 2000);
//             }
    }
    
        changeColor = () => {
        this.setState({
            fill: Konva.Util.getRandomColor()
        }, () => {
            this.wedge.cache();
        })
    }
    
    render() {
        // console.log(this.state.y);
        return (
            <Wedge
            x={this.state.x}
            y={this.state.y}
            radius={this.state.radius}
            fill={this.state.fill}
            stroke={this.state.stroke}
            strokeWidth={1}
            angle={this.state.angle}
            rotation={this.state.rotation}
            shadowColor= {'yellow'}
            shadowBlur={7}
            ref={node => {
                this.wedge = node;
            }}
            onClick={this.changeColor}
            />
        )
    }
}




export default Spaceship;
