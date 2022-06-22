import React, { Component } from 'react';
import Questions from '../resources/question.json';
import './Quiz.css';

class QuizComponent extends Component{
    constructor(){
        super();
        this.state = {
            qid:0
        }
    }
    nextQ = () => {
        this.setState({
            qid:(this.state.qid+1) % 10
        })
    }
    preQ = () => {
        this.setState({
            qid:(this.state.qid - 1 < 0) ? 9 : this.state.qid - 1
        })
    }
    quitbtn = () => {
        alert("Quiz Ended");
    }
    render(){
        return(
             <div className="box">
                    <h1>Question</h1>
                    <span className="quesNo">{this.state.qid + 1} of 10</span>
                    <div className="QueData">
                        <span>{Questions[this.state.qid].question}</span>
                    </div>
                    <div className="options">
                        <button>{Questions[this.state.qid].optionA}</button>
                        <button>{Questions[this.state.qid].optionB}</button>
                        <button>{Questions[this.state.qid].optionC}</button>
                        <button>{Questions[this.state.qid].optionD}</button>
                    </div>
                    <div className="bottom">
                        <button onClick={this.preQ}>Previous</button>
                        <button onClick={this.nextQ}>Next</button>
                        <button onClick={this.quitbtn}>Quit</button>
                    </div>
                </div>
        )
    }
}
export default QuizComponent;