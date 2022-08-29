import React, { Component } from "react";
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from './SearhBox'
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
        return (
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;