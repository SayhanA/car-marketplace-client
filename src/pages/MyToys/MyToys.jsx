import React from 'react';
import useTitle from '../../shared/hooks/useTitle';
import Search from '../../shared/Search/Search';

const MyToys = () => {
    useTitle("MyToys")
    
    return (
        <div>
            <Search />
            <h3>This is my toys page</h3>
        </div>
    );
};

export default MyToys;