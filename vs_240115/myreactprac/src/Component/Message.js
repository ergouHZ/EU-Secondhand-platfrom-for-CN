import React, { Component } from 'react';



class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome vistors'
        }
    }

    changeMessage() {
        this.setState({ message: 'Thanks for subscribing!' })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        );

    }
}

export default Message;