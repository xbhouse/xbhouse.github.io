import React from 'react';
import '../styles/components/AnimatedLetters.css';

const AnimatedLetters = (props) => {
    
    return (
        <span>{props.letters.map((letter, index) => {
            const style = {"animationDelay": (0.1 + index/10) + "s"};
            return (
                <span
                    aria-hidden="true"
                    key={index}
                    style={style}
                >{letter}
                </span>
            )
        })}</span>
    )
}

export default AnimatedLetters;