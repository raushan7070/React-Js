import { Component } from "react";
class StatesInCbc extends Component {
    state = {text:"Hiii"}; // initializing state

    updateState = () => {
        //console.log("btn clicked");
        this.setState({text:"Byee"})//updating state
    }
    render () {
        return (
           <div>
             <h1>States In Class Based Component</h1>
             <h2>{this.state.text}</h2>
             <button onClick={this.updateState}>Change</button>
            </div>
        );
    }
}
export default StatesInCbc;