import React from "react";

export default class Title extends React.Component{
    render(){
        return(
            <div>
                <h2>Welcome {this.props.user}!</h2>
            </div>
        );
    }
}
