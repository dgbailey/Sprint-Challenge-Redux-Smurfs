import React, { Component } from 'react';

export const Item = (props) =>{
    return(
        <div onClick={props.deleteSmurf} className='ind-item'>
        <h3>{props.name}</h3>
        <div>
            <span>{`age: ${props.age}`}</span>
            <span>{`height: ${props.height}`}</span>
        </div>
        
    </div>
    )
}

