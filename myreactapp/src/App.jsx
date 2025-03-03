//Parent component 
import Navbar from "./components/Navbar";

function App(){
    return(
        <div>
           <h1>I am App Component</h1>
           <h2>I am Parent Component</h2>
           <Navbar/>
        </div>
        
    );
}
export default App;