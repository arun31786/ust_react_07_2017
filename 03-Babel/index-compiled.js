"use strict";

/*var Element = React.createClass({
    render: function(){
        return(
            <h1>Hello Bable</h1>
        );
    }
})

ReactDOM.render(<Element />, document.getElementById('my-app'));*/

var name = "Arun";
React.createElement(
    "h1",
    null,
    "Hello, ",
    name,
    "!"
);
