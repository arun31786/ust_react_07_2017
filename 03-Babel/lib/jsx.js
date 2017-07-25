"use strict";

var _person = require("./person");

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Element = React.createClass({
    displayName: "Element",

    ramesh: new _person2.default("Ramesh Kumar"),

    render: function render() {
        console.log(this.ramesh.work());
        return React.createElement(
            "h1",
            null,
            "Hello Friends!"
        );
    }
});

ReactDOM.render(React.createElement(Element, null), document.getElementById('my-app'));