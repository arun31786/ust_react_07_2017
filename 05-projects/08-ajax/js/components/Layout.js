import React from "react";
import axios from "axios";

export default class Layout extends React.Component {

    getTodos(){
      axios({
        method: 'get',
        //data: {},
        url: 'http://localhost:8080/js/server/todo.json',
        //headers: {'Access-Control-Allow-Headers': 'origin, content-type, accept', 'Access-Control-Allow-Origin':'*'}
      })
      .then((res) => {
          console.log(res.data);
          // display data
      })
      .catch((err) =>{console.log(err)});
    }


  render() {
    return (
      <div id="test">
        <h1>This is my website page....</h1>
        <hr/>
        <h2>Welcome </h2>
        <button onClick={this.getTodos.bind(this)}>Click</button>
      </div>
    );
  }
}
