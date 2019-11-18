import React, { PureComponent } from "react";

import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

import "./AddItem.scss";

class AddItem extends PureComponent {
  state = {
    title: ""
  };

  get hasValue() {
    return !!this.state.title.trim();
  }

  onInputChange = event => {
    this.setState({ title: event.target.value });
  };

  handleKeyUp = event => {
    if (event.key === "Enter") {
      this.addItem();
    }
  };

  addItem = () => {
    const { handleAddItem, parent } = this.props;
    const { title } = this.state;

    if (this.hasValue) {
      handleAddItem(title, parent);
      this.setState({ title: "" });
    }
  };

  render() {
    const { title } = this.state;
    return (
      <div className="add-item">
        <Input
          onChange={this.onInputChange}
          onKeyUp={this.handleKeyUp}
          value={title}
        />

        <Button disabled={!this.hasValue} clicked={this.addItem}>
          Add Item
        </Button>
      </div>
    );
  }
}

export default AddItem;