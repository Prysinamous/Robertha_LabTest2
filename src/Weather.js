import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export default function Labtest2() {

const api=
{

    key: "415534b2a698b17b42f72b14efc39453",
    base: "https://api.openweathermap.org/data/2.5/"
}

const[get,setGet]= useState('');
const[weather,setWeather]= useState('');

const f = function myFunction()
{
    fetch(`${api.base}weather?q=${get}&units=metric&APPID=${api.key}`)

        .then(res => res.json())
    .then(result => {
        setWeather(result);
        setGet('');
    });
}

    console.log(weather)

    return (
        <div>
            <div className="search">
            <input
            type= "text"
            className="searching"
            placeholder="Search......."
            onChange={change => setGet(change.target.value)}
            value={get}
            onKeyPress={f}
            >    
            </input>
            </div>

            <div className='city'>
            <h1>{weather}</h1>
            <h1>Date is: 2021-11-30</h1>
            </div>
            
            <div className= 'weather_summary'>
            <h1>{weather.main}</h1>
             <div className= 'temp'>
                 -50°
             </div>
            <div className='weather'>
                Freezing Cold
            </div>

                <div className="square">
                        .
                </div>


            </div>
        </div>

    );
}
