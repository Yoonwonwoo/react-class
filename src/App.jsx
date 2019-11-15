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

    onClickDel = idx => {
        const newItems = [...this.state.items];
        newItems.splice(idx,1);
        this.setState({items:newItems});
        console.log(idx);

        // const items = this.state.items;
        // this.setState ({
        //     items: [...items.slice(0, idx), ...items.slice(idx+1)]
        // });
    };

    onChange = e => {
        this.setState({value: e.target.value});
    };

    onClickMod = (value, idx) => {
        const newItems = [
            ...this.state.items.slice(0,idx), //처음부터 idx 전 배열까지 리턴
            value,
            ...this.state.items.slice(idx+1) //idx에 있는 값만 빼기
            ];
        this.setState({items:newItems});
    }

    render(){
        return (
            <div className="aroot">
                <div className="inputBox">
                   <input type="text" onChange={this.onChange} className="input"/>
                   <button onClick={this.onClickAdd} className="addBtn">추가</button>
                </div>
            {this.state.items.map((value, idx) => (
                <TodoItem 
                key={Math.random()} 
                value={value} 
                className="list" 
                onClickDel={()=>{
                    this.onClickDel(idx);
                }}
                onClickMod={()=>{
                    const value = prompt("수정값 입력");
                    this.onClickMod(value,idx);
                }}/>
            ))}
            </div>
        );
    }
}export default App;