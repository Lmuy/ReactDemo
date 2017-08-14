import React from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>React-router study</h2>
                <ul>
                    <li>名胜古迹</li>
                </ul>
            </div>
        )
    }
}

export default Home;