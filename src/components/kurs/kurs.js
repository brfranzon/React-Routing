import React, { useEffect } from 'react';
import data from '../../data';

import { Link, useRouteMatch } from 'react-router-dom';


function Kurs(props) {

    const match = useRouteMatch();

    useEffect(
        () => {
                console.log(match);
        },
        [match]
    );

    return (
        <div>
            <h1> Kurse </h1>
            <ul>
                {
                    data.map(

                        kurs =>
                            <li key={kurs.id}>
                                <Link to={`${match.url}/${kurs.id}`}>
                                    {kurs.type}
                                </Link>
                            </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Kurs;