import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import data from '../../data';
import Kurs from '../kurs/kurs';


function KursDetail(props) {

    const params = useParams();

    const [kurs, SetKurs] = useState(''); 

    useEffect(
        () => { 
            let kurs = data.filter(kurs=>kurs.id == params.id)[0];
            console.log('kurs', kurs); 
            SetKurs(kurs);
        }, 
        [params]
    );

    return (
        <div>
            <h1> Title: {kurs.type} </h1>
            <h1> Description: {kurs.desc} </h1>
        </div>
    )

};

export default KursDetail;