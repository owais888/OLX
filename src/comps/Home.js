import React, { useEffect, useState } from 'react';
import AdItem from './AdItem';

function HomePage() {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (loading) {
          

            for (let i = 0; i < 12; i++) {
            }

        }

    }, list);

    return (
        <div className="home-page flex">
            {list}
        </div>


    )
}

export default HomePage;    
