import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            previousNumber: '',
            currentNumber: '',
            operator: ''
        };
    }

    addToInput = val => {
        this.setState({ input: this.state.input + val });
    };

    addDecimal = val => {
        // only add decimal if there is no current decimal point present in the input area
        if (this.state.input.indexOf('.') === -1) {
            if (this.state.input === '') {
                this.setState({ input: 0 + val });
            } else {
                this.setState({ input: this.state.input + val });
            }
        }
    };

    addZeroToInput = val => {
        // if this.state.input is not empty then add zero
        if (this.state.input !== '') {
            this.setState({ input: this.state.input + val });
        }
    };

    clearInput = () => {
        this.setState({ input: '', previousNumber: '', currentNumber: '', operator: '' });
    };

    calculate = operator => {
        this.setState({ previousNumber: this.state.input });
        this.setState({ input: '' });
        this.setState({ operator });
    };

    evaluate = () => {
        this.setState({ currentNumber: this.state.input });

        switch (this.state.operator) {
            case 'add':
                this.setState({
                    input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
                });
                break;
            case 'subtract':
                this.setState({
                    input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
                });
                break;
            case 'multiply':
                this.setState({
                    input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
                });
                break;
            case 'divide':
                this.setState({
                    input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
                });
                break;

            default:
                break;
        }
    };

    render() {
        return (
            <div className='App'>
                <div className='calc-wrapper'>
                    <div className='row'>
                        <Input>{this.state.input}</Input>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={() => this.calculate('divide')}>/</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={() => this.calculate('multiply')}>*</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={() => this.calculate('add')}>+</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addDecimal}>.</Button>
                        <Button handleClick={this.addZeroToInput}>0</Button>
                        <Button handleClick={this.evaluate}>=</Button>
                        <Button handleClick={() => this.calculate('subtract')}>-</Button>
                    </div>
                    <div className='row'>
                        <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
