import React, {Component} from 'react';

export default class Pros extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 1
        }
    }
    generateInput = () => {
        return this.setState{ id: id + 1}
    }
    render() {
        return(
            <input type="text"/>
        )
    }
}