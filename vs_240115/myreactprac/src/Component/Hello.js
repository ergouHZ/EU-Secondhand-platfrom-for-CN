import React, { Component } from 'react';

class HelloClass extends Component {
    render() {
    return (
        <div>
            hello 3 {this.props.name}
        </div>
    );

}
}

export default HelloClass;