import React from 'react';

const Knob = (props) => {
    return (
        <div style={{ border: ' 3px solid red ' }}>
            <h2>This is Knob</h2>
            <p>Steps so far:{props.steps}</p>
        </div>
    );
};

export default Knob;