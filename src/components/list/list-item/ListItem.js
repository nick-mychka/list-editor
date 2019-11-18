import React, { PureComponent } from "react";
import "./ListItem.scss";
import {
  MoveUpButton,
  MoveDownButton,
  AddSublistButton,
  RemoveItemButton,
  RemoveSublistButton
} from "./list-item-buttons";

class ListItem extends PureComponent {
  moveUp = () => this.props.handleMoveItem(this.props.item.value, -1);
  moveDown = () => this.props.handleMoveItem(this.props.item.value, 1);
  addSublist = () => this.props.handleAddSublist(this.props.item.value);
  removeItem = () => this.props.handleRemoveItem(this.props.item.value);
  removeSublist = () => this.props.handleRemoveSublist(this.props.item.value);

  render() {
    const {
      item: {
        value: { name, hasSublist }
      },
      isLast,
      isFirst
    } = this.props;

    return (
      <div className="list-item">
        <div className="list-item__head">
          <span>{name}</span>
          <span>
            {!isFirst && <MoveUpButton clicked={this.moveUp} />}
            {!isLast && <MoveDownButton clicked={this.moveDown} />}
            {!hasSublist && <AddSublistButton clicked={this.addSublist} />}
            {hasSublist && <RemoveSublistButton clicked={this.removeSublist} />}
            {<RemoveItemButton clicked={this.removeItem} />}
          </span>
        </div>
      </div>
    );
  }
}

export default ListItem;