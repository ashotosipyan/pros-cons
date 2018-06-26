import { ADD_ITEM, DELETE_ITEM } from '../actions';

const items = ( state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            let stateLength = state.length;
            let dataIndex = parseInt(action.index);
            if(stateLength === dataIndex + 1){
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
            let currentInputId = state.map((id) => {
                console.log(id);
                return id
            });
            console.log(currentInputId);
            console.log('reducer tex', state);
        default:
            return state;
    }
}

export default items;