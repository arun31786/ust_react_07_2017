import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class Layout extends React.Component{

    constructor(){
        super();
        this.state = {name: "Carl"};
    }
    render(){
        const username = "Seeta"
        setTimeout(() => {
            this.setState({name: "Mark"}
        )}, 5000);
        return(
            <div>
                <Header />
            <hr/>
                <Main user={this.state.name}/>
                <h3>{this.state.name}</h3>
            <hr/>
                <Footer />
            </div>
        );
    }
}

export default Layout;