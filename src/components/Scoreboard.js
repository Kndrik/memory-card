import { useState } from 'react';

export function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div className="score">Current: <span>5</span></div>
            <div className="score">Best: <span>11</span></div>
        </div>
    );
}