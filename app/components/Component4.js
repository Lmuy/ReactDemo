import React,{handleEmail} from 'react';
import Component5 from './Component5.js';

class Component4 extends React.Component {
    constructor(props){
        super(props);
        this.state={email:""};
        this.handleEmail = this.handleEmail.bind(this);
    }
    handleEmail(event){
        this.setState({email:event.target.value})
    }
    render() {
        return (
             <div>
                 <div>用户邮箱：{this.state.email}</div>
                 <Component5 name="email" handleEmail={this.handleEmail}/>
             </div>
        )
    }
}

//导出组件
export default Component4;