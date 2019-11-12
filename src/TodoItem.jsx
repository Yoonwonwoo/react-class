import styled from "styled-components";
import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: props.value,
            items: props.items
        }
    }
    

    render(){
        return(
            <div className="root">
                <span className="title">{this.state.value}</span>
                <button className="change">수정</button>
                <button className="remove">삭제</button>
            </div>
        )
    }
}

export default TodoItem;