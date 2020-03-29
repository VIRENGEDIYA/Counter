import React, { Component } from 'react'

export class Total extends Component {
    render() {
        const { sum } = this.props;
        return (
            <div>
                <p>{sum}</p>
            </div>
        )
    }
}

export default Total
