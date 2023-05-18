import React from 'react';
import useTitle from '../../shared/hooks/useTitle';

const MyToys = () => {
    useTitle("MyToys")
    
    return (
        <div>
            <h3>This is my toys page</h3>
        </div>
    );
};

export default MyToys;