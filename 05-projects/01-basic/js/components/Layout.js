import React from "react";

import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component {

  render() {
      /* return method can return only one element. That element can have multimple elements. */
    return (
      <div id="test">
        <Header/>
        <h1>This is my website page....</h1>
        
        <h2>Welcome </h2>
        <Footer></Footer>
      </div>
    );
  }
}
