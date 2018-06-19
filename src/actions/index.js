let itemId = 0;

export const addItem = value => ({
    type: 'ADD_ITEM',
    id: itemId++,
    value
});
