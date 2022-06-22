import React, { Component } from 'react';
import './Result.css';
const ResultComponent = () => {
    return(
        <>
        <div>
            <div id="img"></div>
            <h1 className='head'>Result</h1>
            <div className='box'>
            <h2 className='feed'>You need more practice!</h2>
            <h1 className='score'>Your Score: 20%</h1>
            <div className='res'>
                <div className='details'><span>Total number of questions:</span><span>15</span></div>
                <div className='details'><span>Number of attempted questions:</span><span>9</span></div>
                <div className='details'><span>Number of Correct Answers:</span><span>3</span></div>
                <div className='details'><span>Number of Wrong Answers:</span><span>6</span></div>
            </div>
            </div>
            <div className='btn'><button>Play Again</button><button>Back to Home</button></div>
        </div>
        </>
    );
}
export default ResultComponent;