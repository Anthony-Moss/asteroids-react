import React from 'react';
import Konva from 'konva';
import { Circle } from 'react-konva';

// Ha If i ever actually get to touching this it shouldnt be hard by that time
// simple component with a fixed size, shape, speed. Only "hard" part is going to be acceleration
// But luckily I looked that shit up and some good ol sin cos on the rotation deg of the ship (which worst case I should beable to steal that shit from cache)
// But yea really shouldnt be that hard if I get ship movement working this will work pretty easily 
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
                    y={590}
                    radius={3}
                    fill="green"
                />
    }
}

export default Bullets;