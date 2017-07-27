import React from "react";

import Title from "./Title";

class Main extends React.Component{
handleChange(element){
    const user = element.target.value;
    this.props.changeChildUser(user); 
}
    render(){
        console.log(this.props.user);
        return(
            <div>
                <h1>This is main section.</h1>
                <Title user={this.props.user}/>
                <input value={this.props.user} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default Main;