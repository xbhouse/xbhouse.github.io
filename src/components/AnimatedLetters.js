import React from 'react';
import '../styles/components/AnimatedLetters.css';

const AnimatedLetters = (props) => {
    return (
        <span>{props.letters.map((letter) => {
            return (<span>{letter}</span>)
        })}</span>
    )
}

export default AnimatedLetters;