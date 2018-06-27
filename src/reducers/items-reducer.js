import { ADD_ITEM, DELETE_ITEM } from '../actions';

const items = ( state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            let stateLength = state.length;
            let dataIndex = parseInt(action.index);
            if(stateLength === dataIndex){
                return [
                    ...state,
                    {
                        id: action.id,
                        value: action.value,
                        index: action.index
                    }
                ];
            }
        case DELETE_ITEM:
            const x = state.map((item) => {
                if(item.id === action.id){
                    return 
                }
            });
            console.log(x);
            return [...state];
        default:
            return state;
    }
}

export default items;