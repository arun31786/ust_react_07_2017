import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import Title from "./Title";


class Layout extends React.Component{
    constructor(){
        super();
        this.state = {user: "Tom"}
    }
    changeParentUser(element){
        this.setState({user:element.target.value});
    }
    changeChildUser(user){
        this.setState({user:user})// es5
    }
    render() {
//        const user = "Miley"; 
        return(
            <div>
                <Header />
                <hr/>
            
                Layout.js
                <Title user={this.state.user}/>
                <input value={this.state.user} onChange={this.changeParentUser.bind(this)}/>
                <hr/>
            
                Main.js
                <Main user={this.state.user} changeChildUser={this.changeChildUser.bind(this)}/>
                <hr/>
            
                <Footer />
            </div>
        );
    }
}

export default Layout;