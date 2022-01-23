import Task from "./task/Task";
import faker from 'faker'
import React from "react";
class App extends React.Component{
    
    state = {latitude:null, errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({latitude:position.coords.latitude,err:null}),
            err=>this.setState({latitude:null,errorMessage:err.message})
        )
    }
    componentDidUpdate(){
        console.log("Component updated ..");
    }
    
    render(){
        return <div>{JSON.stringify(this.state)}</div>
    }
}
export default App;