import React, { PureComponent } from "react";
import {connect} from 'react-redux';

import {
  MoveUpButton,
  MoveDownButton,
  AddSublistButton,
  RemoveItemButton,
  RemoveSublistButton
} from "./list-item-buttons";

import { 
  moveItem,
  addSublist,
  removeItem, 
  removeSublist} from '../../../actions';

import "./ListItem.scss";

class ListItem extends PureComponent {
  handleMoveUp = () => this.props.moveItem(this.props.item.value, -1);
  handleMoveDown = () => this.props.moveItem(this.props.item.value, 1);
  handleAddSublist = () => this.props.addSublist(this.props.item.value);
  handleRemoveItem = () => this.props.removeItem(this.props.item.value);
  handleRemoveSublist = () => this.props.removeSublist(this.props.item.value);

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
            {!isFirst && <MoveUpButton clicked={this.handleMoveUp} />}
            {!isLast && <MoveDownButton clicked={this.handleMoveDown} />}
            {!hasSublist && <AddSublistButton clicked={this.handleAddSublist} />}
            {hasSublist && <RemoveSublistButton clicked={this.handleRemoveSublist} />}
            {<RemoveItemButton clicked={this.handleRemoveItem} />}
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
    moveItem,
    addSublist,
    removeItem,
    removeSublist
}

export default connect(null, mapDispatchToProps)(ListItem);