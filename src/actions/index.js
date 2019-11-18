const addItem = (item, parent) => ({type: 'ADD_ITEM', item, parent});
const moveItem = (item, step) => ({type: 'MOVE_ITEM', item, step});
const removeItem = (item) => ({type: 'REMOVE_ITEM', item});
const addSublist = (item) => ({type: 'ADD_SUBLIST', item});
const removeSublist = (item) => ({type: 'REMOVE_SUBLIST', item});


export {
    addItem,
    moveItem,
    removeItem,
    addSublist,
    removeSublist
}