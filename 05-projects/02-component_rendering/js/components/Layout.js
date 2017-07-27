import React from "react";

export default class Layout extends React.Component {
      getAddress(){
          console.log("hello delhi");
          return "Delhi";
      }

  render() {
      const fName = "Mukesh";
      const lName = "Kumar";
      
    return (
      <div>
        <h1>This is my website page....</h1>
        <hr/>
        <h2>Welcome {fName}</h2>
        <h2>Your full name is: {fName + " " + lName}</h2>
        <h2>Your age is: {(function(){return 33;})()}</h2>
        <h2>Your address is: {this.getAddress()}</h2>
        <h2>Sum of 5 and 3 is: { 5 + 3 }</h2>
        <button onClick={this.getAddress.bind(this)}>Click</button>
      </div>
    );
  }
}
