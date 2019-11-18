import React, { PureComponent } from "react";
import List from "../list/List";
import Tree from "../../utils/Tree";
import { uuid } from "../../utils/uuid";

class App extends PureComponent {
  tree = new Tree({ id: "root" });

  state = {
    nodes: []
  };

  handleAddItem = (name, parent) => {
    const item = {
      id: uuid(),
      name,
      hasSublist: false
    };
    this.tree.addNode(item, parent);
    this.setState({ nodes: this.tree.children });
  };

  handleAddSublist = listItem => {
    this.tree.updateNode(listItem, node => {
      node.value.hasSublist = true;
    });

    this.setState({ nodes: this.tree.children });
  };

  handleRemoveSublist = listItem => {
    this.tree.updateNode(listItem, node => {
      node.children = [];
      node.value.hasSublist = false;
    });

    this.setState({ nodes: this.tree.children });
  };

  handleRemoveItem = listItem => {
    this.tree.removeNode(listItem);
    this.setState({ nodes: this.tree.children });
  };

  handleMoveItem = (listItem, step) => {
    this.tree.moveNode(listItem, step);
    this.setState({ nodes: this.tree.children });
  };

  render() {
    const { nodes } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center pt-5 pb-3">
          <div className="col-12">
            <h1 className="text-center mb-4">List Editor</h1>
          </div>

          <div className="col-12 col-md-8 col-xl-6">
            <List
              list={nodes}
              parent={null}
              handleAddItem={this.handleAddItem}
              handleMoveItem={this.handleMoveItem}
              handleAddSublist={this.handleAddSublist}
              handleRemoveItem={this.handleRemoveItem}
              handleRemoveSublist={this.handleRemoveSublist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

