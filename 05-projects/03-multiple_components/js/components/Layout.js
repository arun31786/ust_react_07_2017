import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class Layout extends React.Component{
    render(){
        var list = [<Header key="0"/>, <Main key="1"/>, <Footer key="2"/>];
        return(
            <div>
                {list}
            </div>
        );
    }
/*
    render(){
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
*/
}

export default Layout;