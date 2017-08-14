//main.js
// import React from 'react';
// import ReactDom from 'react-dom';
// import Component3 from './components/Component3.js';

// ReactDom.render( 
//     <Component3 /> ,
//     document.getElementById('content')
// );

//new main.js
import React from 'react';
import ReactDom from 'react-dom';
import {Link,Route,BrowserRouter as Router,browserHistory} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Topics from './components/Topics.js';

ReactDom.render( 
    <Router history={browserHistory}>
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
        
        <hr/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        </div>
    </Router>,
    document.getElementById('content')
);