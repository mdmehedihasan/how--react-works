import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = (props) => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect(() => {
        console.log(steps);
    }, [steps])

    return (
        <div>
            <h2>This is Watch Components</h2>
            <h3>My Current Steps:{steps}</h3>
            <button onClick={increaseSteps}>De Dour</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;