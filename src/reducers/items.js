const items = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    value: action.value
                }
            ];
        default:
            return state;
    }
}

export default items;