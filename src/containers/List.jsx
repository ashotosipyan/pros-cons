import { connect } from 'react-redux';
import { addItem } from '../actions';
import ListComponent from '../components/List.jsx';

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    addItem: value => dispatch(addItem(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);