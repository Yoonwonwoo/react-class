import styled from "styled-components";
import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: props.value,
            items: props.items,
            check: false
        }
    }

    onModify = e => {
        this.setState({
            check : true
        });
    }

    onComplete = e => {
        this.setState({
            check: false
        });
        this.props.change(this.props.index, this.refs.value.value);
    }

    render(){

        if(this.state.check){
            return(
                <div className="root">
                    <input type="text" ref="value"/>
                    <button className="change" onClick={this.onComplete}>확인</button>
                    <button className="remove" onClick={this.props.onClickDel}>삭제</button>
                </div>
            )
        }

        return(
            <div className="root">
                <span className="title">{this.state.value}</span>
                <button className="change" onClick={this.onModify}>수정</button>
                <button className="remove" onClick={this.props.onClickDel}>삭제</button>
            </div>
        )
    }
}

export default TodoItem;