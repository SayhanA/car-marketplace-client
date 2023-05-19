import React from 'react';
import Countdown from 'react-countdown';
import useTitle from '../../shared/hooks/useTitle';

const AddAToy = () => {
    useTitle("Add A Toy")

    return (
        <div id='root'>
            <h3>Add a toy page</h3>
            <Countdown date={Date.now() + 10000 * 10000} />,
            
        </div>
    );
};

export default AddAToy;