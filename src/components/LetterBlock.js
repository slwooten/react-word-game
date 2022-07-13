import React, { useState, useRef } from "react";

const LetterBlock = ({ word }) => {
  
  const letter1 = useRef(null); 
  const letter2 = useRef(null); 
  const letter3 = useRef(null); 
  const letter4 = useRef(null); 

  console.log(word);

  const handleGuess = (e) => {
    e.preventDefault();
    const letter1Val = letter1.current.value;
    const letter2Val = letter2.current.value;
    const letter3Val = letter3.current.value;
    const letter4Val = letter4.current.value;

    if (word.includes(letter1Val) && word[0] === letter1Val) {
      console.log('change to green');
    } else if (word.includes(letter1Val)) {
      console.log('change to yellow');
    } else {
      console.log('change to red');
    }
    console.log(letter1Val, letter2Val, letter3Val, letter4Val);

  }

  return (
    <div className="letter-block-container">
      <form>
        <input type="text" ref={letter1}></input>
        <input type="text" ref={letter2}></input>
        <input type="text" ref={letter3}></input>
        <input type="text" ref={letter4}></input>
        <button type="submit" onClick={handleGuess}>Go</button>
      </form>
    </div>
  )
};

export default LetterBlock;
