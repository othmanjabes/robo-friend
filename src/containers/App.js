import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearhBox'
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }
    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }
    render(){
        const {robots, searchfield}=this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className="tc">
                    <h1>Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;