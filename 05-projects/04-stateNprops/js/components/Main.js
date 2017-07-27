import React from "react";

import Title from "./Title";

class Main extends React.Component{
    render(){
        console.log(this.props.user);
        return(
            <div>
                <h1>This is main section.</h1>
                <Title user={this.props.user}/>
            </div>
        );
    }
}

export default Main;