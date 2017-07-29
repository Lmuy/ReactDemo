//Component2.jsx
import React,{handleClick} from 'react';

class Component2 extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.refs.inputText.focus();
    }
    render() {
        return (
             <div>
                 <input type="text" ref="inputText" />                 
                 <input type="button" value="点击" onClick={this.handleClick}/>
             </div>
        )
    }
}

//导出组件
export default Component2;