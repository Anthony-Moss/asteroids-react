import React from 'react';
import Konva from 'konva';
import { Circle } from 'react-konva';

// simple component with a fixed size, shape, speed , with x and y taken from spaceship and then moves straight from the tip of ship,
// no bounds like other comps though might make game off
class Bullets extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            x: 0,
            y: 0,
            radius: 2 
        }
    }

    render() {
        return <Circle 
                    x={400}
                    y={590}
                    radius={3}
                    fill="green"
                />
    }
}

export default Bullets;