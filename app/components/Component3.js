//Component3.jsx
import React from 'react';
import Component1 from './Component1.js';
import Component2 from './Component2.js';
class Component3 extends React.Component {
    
    render() {
        return (
             <div>
                 <Component1 /> 
                 <Component2 /> 
             </div>
        )
    }
}

//导出组件
export default Component3;