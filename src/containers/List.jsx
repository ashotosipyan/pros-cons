import { connect } from 'react-redux';
import { addItem, deleteItem } from '../actions';
import ListComponent from '../components/List.jsx';

//     // inputHandler(e) {
//     //     let newItems = [].concat(this.state.items);
//     //     const itemIndex =  parseInt(e.target.dataset.index);
//     //     newItems[itemIndex].value = e.target.value;

//     //     //Item removing
//     //     if ( !e.target.value.length && this.state.items.length > 1 ) {
//     //         console.log('itemIndex', itemIndex);
//     //         console.log('new', newItems);
//     //         newItems.splice(itemIndex, 1);
//     //     }

//     //     //Item adding
//     //     if ( itemIndex === newItems.length - 1 ) {
//     //         let lastItem = newItems[newItems.length - 1];
//     //         newItems.push( new ListItem(lastItem.id + 1) );
//     //     }

//     inputHandler(e) {
//         // if ( itemIndex === newItems.length - 1 ) {
//             // let lastItem = newItems[newItems.length - 1];
//             // newItems.push( new ListItem(lastItem.id + 1) );
//         // }
//     }
// } 

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    addItem: (inputValue, index) => dispatch(addItem(inputValue, index)),
    deleteItem: (id, index) => dispatch(deleteItem(id, index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);