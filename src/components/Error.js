import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }


    componentDidCatch(error, info){
        this.setState({hasError: true})

    }; // this is like the try catch block in JS

    render(){
        if(this.state.hasError){
            return <h1>OOPS thats not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry