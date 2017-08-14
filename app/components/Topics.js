import React from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';

class Topics extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>React-router study</h2>
                <ul>
                    <li>Topics</li>
                </ul>
            </div>
        )
    }
}

export default Topics;