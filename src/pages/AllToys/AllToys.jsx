import React from 'react';
import useTitle from '../../shared/hooks/useTitle';
import Search from '../../shared/Search/Search';

const AllToys = () => {
    useTitle("All Toys")
    
    return (
        <div>
            <Search />
            <h3>All toys page</h3>
        </div>
    );
};

export default AllToys;