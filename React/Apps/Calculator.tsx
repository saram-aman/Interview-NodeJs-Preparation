import React, { Component } from 'react';

interface CalculatorState {
    displayValue: string;
    operator: string | null;
    previousValue: string | null;
}

class Calculator extends Component {
    state: CalculatorState = {
        displayValue: '0',
        operator: null,
        previousValue: null,
    };
    constructor(props: {}) {
        super(props);
        this.state = {
            displayValue: '0',
            operator: null,
            previousValue: null,
        };
    }

    async inputDigit(digit: string) {
        const { displayValue } = this.state;
        this.setState({
            displayValue: displayValue === '0' ? digit : displayValue + digit,
        });
    }

    async inputDot() {
        const { displayValue } = this.state;
        if (!displayValue.includes('.')) {
            this.setState({
                displayValue: displayValue + '.',
            });
        }
    }

    async clearDisplay() {
        this.setState({
            displayValue: '0',
        });
    }

    async handleOperator(nextOperator: string) {
        const { displayValue, operator, previousValue } = this.state;
        const inputValue = parseFloat(displayValue);

        if (previousValue == null) {
            this.setState({
                previousValue: displayValue,
                displayValue: ''
            });
        } else if (operator) {
            const currentValue = previousValue ? parseFloat(previousValue) : 0;
            const newValue = this.performOperation(currentValue, inputValue, operator);

            this.setState({
                displayValue: String(newValue),
                previousValue: String(newValue),
            });
        }

        this.setState({
            operator: nextOperator,
            displayValue: '0',
        });
    }

    async performOperation(left: number, right: number, operator: string) {
        switch (operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                return left / right;
            default:
                return right;
        }
    }

    render() {
        const { displayValue } = this.state;

        return (
            <div className="calculator">
                <div className="calculator-display">{displayValue}</div>
                <div className="calculator-keypad">
                    <div className="input-keys">
                        <div className="function-keys">
                            <button onClick={() => this.clearDisplay()}>AC</button>
                        </div>
                        <div className="digit-keys">
                            {[...Array(10).keys()].map((digit) => (
                                <button key={digit} onClick={() => this.inputDigit(String(digit))}>
                                    {digit}
                                </button>
                            ))}
                            <button onClick={() => this.inputDot()}>.</button>
                        </div>
                    </div>
                    <div className="operator-keys">
                        <button onClick={() => this.handleOperator('+')}>+</button>
                        <button onClick={() => this.handleOperator('-')}>-</button>
                        <button onClick={() => this.handleOperator('*')}>*</button>
                        <button onClick={() => this.handleOperator('/')}>/</button>
                        <button onClick={() => this.handleOperator('=')}>=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;