import React from 'react';
import Konva from 'konva';
import { Wedge } from 'react-konva';


// this represents the players ship 
class Spaceship extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        x:200,
        y:400,
        color: 'purple'
    };

    // I need to put the movement for the ship here
    // when ship mounts it needs to start listening for event? 
    componentDidMount() {
        this.wedge.cache();
    }
    // This is useless to me but it is a working examples of shit im trying to do 
    // Focus apply this shit to everything I need but its with a keypress 
    // I even have it set up in app.js to listen I just need to make that work here 
    // On a side/direct note, maybe I keep this in there as a cool "feature", to style your ship haha 
    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        }, () => {
            this.wedge.cache();
        })
    }
    
    render() {
        return (
            <Wedge
            x={this.state.x}
            y={this.state.y}
            radius={30}
            fill={this.state.color}
            stroke='grey'
            strokeWidth={1}
            angle={50}
            rotation={65}
            ref={node => {
                this.wedge = node;
            }}
            onClick={this.handleClick}
            />
            )
        }
    }


export default Spaceship;
