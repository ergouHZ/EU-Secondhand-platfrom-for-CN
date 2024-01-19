import React, { Component } from 'react';



class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    increment() {
/*         this.setState(
            { count: this.state.count + 1 },
            () => {console.log('callback value',this.state.count)}
        ); */

        this.setState(preState=>(
            { count: preState.count + 1}),
            () => {console.log('callback value',this.state.count)}
            )
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h2>The counter : {this.state.count}</h2>
                <button onClick={() => {this.incrementFive()}}>Counter</button>
            </div>
        );

    }
}

export default Counter;