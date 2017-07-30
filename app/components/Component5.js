import React from 'react';

class Component5 extends React.Component {
    render() {
        return (
             <div>          
                 <input type="text" onChange={this.props.handleEmail}/>
             </div>
        )
    }
}

//导出组件
export default Component5;