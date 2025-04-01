import React, { Component } from 'react'

export default class LifeCycle extends Component {
    state = { value: 0};

    componentDidMount(){
        console.log("Component Mounted");
        
    }
    componentDidUpdate(){
        console.log("Component Updated");
        
    }
    componentWillUnmount(){
        console.log("Component Unmounted");
        
    }

    increment = () => this.setState({value: this.state.value+1});
  render() {
    return (
      <div>
        <h1>Learn LifeCylcle in CBC {this.state.value} </h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
