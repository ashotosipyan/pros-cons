import uniqid from 'uniqid';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (value, index) => ({
    type: ADD_ITEM,
    id: uniqid(),
    value,
    index
});

export const deleteItem = id => ({
    type: DELETE_ITEM,
    id,
    items: store.getState().items
});
