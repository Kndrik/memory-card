import { useState } from 'react';
import image from '../images/classes/iop.png';

export function Card(props) {
    return (
        <div className="card">
            <img src={image} alt="Iop" className="card-image"/>
            <div className="card-name">Iop</div>
        </div>
    );
}