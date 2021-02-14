import React from 'react';
import data from '../../data';

import {Link} from 'react-router-dom'; 


function Kurs(props) {

    console.log('data', data);

    return (
        <div>
            <h1> Kurse </h1>
            <ul>
                {
                data.map(

                    item =>
                    <li key={item.id}> 
                        <Link to = {`/kurs/${item.id}`}>
                            {item.type} 
                        </Link>
                    </li> 
                )
                }
            </ul>
        </div>
    );
}

export default Kurs;