import { Component } from "react";

class CounterInCbc extends Component {
    state = {count : 0};

    incre = () => {
        this.setState({ count : this.state.count+1});
    }
    decre = () => {
        this.setState({ count : this.state.count-1});
    }
    render () {
        console.log("Counter In CBC component");
        return (
            <div>
                <h1>Counter In Claas Based Component</h1>
                <h2>Counter {this.state.count} </h2>
                <button onClick={this.incre}>Imcrement</button>
                <button onClick={this.decre}>Decrement</button>
            </div>
        );
    }
}
export default CounterInCbc;
