import { useState } from 'react';

export function Card(props) {
    return (
        <div className="card" onClick={props.clickEvent}>
            <img src={props.image} alt="Image" className="card-image"/>
            <div className="card-name">{props.name}</div>
        </div>
    );
}