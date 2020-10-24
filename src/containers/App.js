import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/Error'
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        };
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }
    // using the onSearchChange{} like this would affect it 
    // becase the input does not have the state and this is because 
    // we are making our own function in react so you have to do it 
    // like it is below to make sure the function and the input get a state 
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) // this sets the state so it can be filtered
    };
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        }) 
        return !robots.length ?
            <h1>Loading .......</h1> :
        (
                <div className = 'tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundry>
                        
                    </Scroll>
                    
                </div>
            );
    }
}
export default App