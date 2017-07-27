import React from "react";

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {isActive: true};
    }
    handleClick(element){
        this.setState({isActive:!this.state.isActive});
        console.log(this.state.isActive);
    }
    successStyle = {color:'green', background: 'yellow', textAlign:'center', fontSize: '2em'};
    failureStyle = {color:'white', background: 'blue', textAlign:'center', fontSize: '2em'};
    
    render(){
        
        return(
            <div>
                <h2 style={this.state.isActive ? this.successStyle : this.failureStyle}>I am Header.</h2>
                <button onClick={this.handleClick.bind(this)}>I am a button</button>
            </div>
        );
    }
}
