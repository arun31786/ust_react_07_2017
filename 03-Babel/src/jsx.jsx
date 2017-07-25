import Person from "./person";


var Element = React.createClass({
ramesh : new Person("Ramesh Kumar"),

    render: function(){
console.log(this.ramesh.work());
        return(
            <h1>Hello Friends!</h1>
        );
    }
})

ReactDOM.render(<Element />, document.getElementById('my-app'));