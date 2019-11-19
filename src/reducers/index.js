import Tree from '../utils/Tree';

const tree = new Tree({ id: "root" });
const initialState = {
  nodes: []
};

const reducer = (state = initialState, action) => {
  const {item, parent, step} = action;
  switch (action.type) {
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

// get children() {
//     return JSON.parse(JSON.stringify(this._root.children));
//   }

//   addNode(value, _parentValue = null) {
//     const parentValue = _parentValue || this._root.value;
//     const newNode = { value, children: [] };

//     this._traverse(node => {
//       if (node.value.id === parentValue.id) {
//         node.children.push(newNode);
//         return false;
//       }

//       return true;
//     });
//   }

//   updateNode(value, callback) {
//     this._traverse(node => {
//       if (node.value.id === value.id) {
//         callback(node);
//         return false;
//       }

//       return true;
//     });
//   }

//   removeNode(value) {
//     this._traverse(node => {
//       for (let idx = 0; idx < node.children.length; idx++) {
//         if (node.children[idx].value.id === value.id) {
//           node.children.splice(idx, 1);
//           return false;
//         }
//       }

//       return true;
//     });
//   }

//   moveNode(value, step) {
//     this._traverse(node => {
//       for (let idx = 0; idx < node.children.length; idx++) {
//         if (node.children[idx].value.id === value.id) {
//           let to = idx + step;
//           let from = idx;
//           node.children.splice(to, 0, node.children.splice(from, 1)[0]);
//           return false;
//         }
//       }

//       return true;
//     });
//   }

//   _traverse = callback => {
//     function goThrough(node) {
//       if (!callback(node)) {
//         return;
//       }

//       node.children.forEach(child => {
//         goThrough(child);
//       });
//     }

//     goThrough(this._root);
//   };
// }

export default reducer