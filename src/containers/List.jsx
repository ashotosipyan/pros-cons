import React, {Component} from 'react';
import ListComponent from '../components/List.jsx';

export class ListItem {
    constructor( id, value = '' ) {
        this.id = id;
        this.value = value;
    }
}

export default class List extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            items: [].concat(this.props.items)
        };
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        let newItems = [].concat(this.state.items);
        const itemIndex =  parseInt(e.target.dataset.index);
        newItems[itemIndex].value = e.target.value;
        
        //Item removing
        if ( !e.target.value.length && this.state.items.length > 1 ) {
            newItems.splice(itemIndex, 1);
        }

        //Item adding
        if ( itemIndex === newItems.length -1 ) {
            let lastItem = newItems[newItems.length - 1];
            newItems.push( new ListItem(lastItem.id + 1) );
        }

        this.setState({
            items: newItems
        });

    }

    blurHandler(e) {
        let newItems = [].concat(this.state.items);
        const index = e.target.dataset.index;
        newItems[index].value = e.target.value;
        this.setState({
            items: newItems
        });
    }

    render() {
        return (
            <ListComponent
                onInputChange={this.inputHandler}
                items={this.state.items}
            />
        );
    }
}