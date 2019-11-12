import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import './App.css'


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items:[],
            value : ""
        };
    }
    
    onClickAdd = e => {
        const items = this.state.items;
        items.push(this.state.value);
        this.setState({
            items
        });
    };

    onChange = e => {
        this.setState({value: e.target.value});
    }

    render(){
        return (
            <div className="aroot">
                <div className="inputBox">
                   <input type="text" onChange={this.onChange} className="input"/>
                   <button onClick={this.onClickAdd} className="addBtn">추가</button>
                </div>
            {this.state.items.map((value, idx) => (
                <TodoItem key={idx} value={value} className="list"/>
            ))}
            </div>
        );
    }
}export default App;