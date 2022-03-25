import React from 'react';
import Knob from '../Knob/Knob';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid red', backgroundColor: 'grey' }}>
            <h2>Name: {props.name}</h2>
            <h3>My Name Garmin</h3>
            <p>So far steps today:{props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Display;