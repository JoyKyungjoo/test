import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
                <h3>List</h3>
                <ul>
                    {
                        this.props.onData.map(
                            item => <li key={item.no}> {item.no} / {item.text} </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default List;