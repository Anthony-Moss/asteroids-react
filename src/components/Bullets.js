import React from 'react';
import Konva from 'konva';
import { Circle } from 'react-konva';


class Bullets extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bullets: []
        }
    }

    render() {
        return <Circle 
                    x={400}
                    y={795}
                    radius={3}
                    fill="green"
                />
    }
}

export default Bullets;