import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class Layout extends React.Component{

    render() {
        const user = "Miley";
        return
            (
            <div>
                <Header />
                <hr/>
                <Main user={user} />
                <hr/>
                <Footer />
            </div>
        );
    }
}

export default Layout;