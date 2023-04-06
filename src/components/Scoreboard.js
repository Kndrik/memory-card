import { useState } from 'react';

export function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div className="score">Current: <span>{props.current}</span></div>
            <div className="score">Best: <span>{props.best}</span></div>
        </div>
    );
}