import React from 'react';
import Konva from 'konva';
import { Wedge } from 'react-konva';


// this represents the players ship 
class Spaceship extends React.Component {
    state={
        x:200,
        y:400,
        color: 'purple'
    };
    componentDidMount() {
        this.wedge.cache();
    }
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
                x={400}
                y={800}
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
