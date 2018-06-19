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
            break;
    
        default:
            break;
    }
}

export default items;