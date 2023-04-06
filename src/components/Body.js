import { useState } from 'react';
import { Card } from './Card';
import { getClassArray } from '../classesContainer';

export function Body(props) {
    const [cards, setCards] = useState(getClassArray());

    function shuffleCards() {
        console.log('shuffle');
        let newArray = [...cards];
        for (var i = newArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
        setCards(newArray);
    }

    const cardsDisplay = cards.map((card, i) => {
        return (
            <Card key={i} image={card.image} name={card.name} clickEvent={() => { props.clickEvent(card.name); shuffleCards();}}/>
        );    
    })

    return (
        <div className="body">
                {cardsDisplay}
        </div>
    );
}