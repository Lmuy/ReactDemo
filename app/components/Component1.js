//Component1.jsx
import React,{handleClick} from 'react';

class Component1 extends React.Component {
    constructor(props){
        super(props);
        this.state={message:"text"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setState({message:event.target.value})
    }
    render() {
        var text = this.state.message;
        return (
             <div>
                 {/*<input type="text" value={text} onChange={(event) => this.handleClick(event)}/>
                 <b>{text}</b */}
                 <input type="text" value={text} onChange={this.handleClick}/>
                 <b>{text}</b>
             </div>
        )
    }
}

//导出组件
export default Component1;