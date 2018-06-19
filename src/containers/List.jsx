import React, {Component} from 'react';
import ListComponent from '../components/List.jsx';
// import { connect } from 'react-redux';
// import { addItem } from '../actions';


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
            console.log('itemIndex', itemIndex);
            console.log('new', newItems);
            newItems.splice(itemIndex, 1);
        }

        //Item adding
        if ( itemIndex === newItems.length - 1 ) {
            let lastItem = newItems[newItems.length - 1];
            newItems.push( new ListItem(lastItem.id + 1) );
        }

        this.setState({
            items: newItems
        });

    }

    render() {
        return (
            <ListComponent
                header={this.props.header}
                onInputChange={this.inputHandler}
                items={this.state.items}
            />
        );
    }
} 

// const mapDispatchToProps = dispatch => ({
//     dispatch: (value) => {
//         dispatch(addItem(value))
//     }
// });

// export default connect(() => ({}), mapDispatchToProps)(List);