import React, {Component} from 'react';

class Test extends Component {
    state = {
        title: "",
        body: ""
    };

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }
    //
    // componentDidMount() {
    //     console.log("componentDidMount");
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //                 title: data.title,
    //                 body: data.body
    //             });
    //         });
    // }
    //
    // componentWillUpdate() {
    //     console.log("componentWillUpdate");
    // }
    //
    // componentDidUpdate() {
    //     console.log("componentDidUpdate");
    // }
    //
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("componentWillReceiveProps");
    // }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <br/>
                <p>{this.state.body}</p>
            </div>
        );
    }
}

export default Test;