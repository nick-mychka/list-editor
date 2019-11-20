import Tree from '../utils/Tree';

const tree = new Tree({ id: "root" });
const initialState = {
  nodes: []
};

const reducer = (state = initialState, action) => {
  const {type, item, parent, step} = action;
  switch (type) {
    case 'ADD_ITEM':
      tree.addNode(item, parent);
      return { nodes: tree.children };

    case 'REMOVE_ITEM':
      tree.removeNode(item);
      return { nodes: tree.children };

    case 'MOVE_ITEM':
      tree.moveNode(item, step);
      return { nodes: tree.children };

    case 'ADD_SUBLIST':
      tree.updateNode(item, node => {
        node.value.hasSublist = true;
      });
      return { nodes: tree.children };

    case 'REMOVE_SUBLIST':
      tree.updateNode(item, node => {
        node.children = [];
        node.value.hasSublist = false;
      });
      return { nodes: tree.children };

    default:
      return state
  }
}

export default reducer