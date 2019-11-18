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
  handleMoveUp = () => {
    const {moveUp, item: {value}} = this.props;
    moveUp(value, -1);
  }
  handleMoveDown = () => {
    const {moveDown, item: {value}} = this.props;
    moveDown(value, 1);
  }
  handleAddSublist = () => {
    const {addSublist, item: {value}} = this.props;
    addSublist(value);
  }
  handleRemoveItem = () =>  {
    const {removeItem, item: {value}} = this.props;
    removeItem(value);
  }
  handleRemoveSublist = () => {
    const {removeSublist, item: {value}} = this.props;
    removeSublist(value);
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    moveUp: (item, step) => dispatch(moveItem(item, step)),
    moveDown: (item, step) => dispatch(moveItem(item, step)),
    addSublist: (item) => dispatch(addSublist(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    removeSublist: (item) => dispatch(removeSublist(item))
  }
}

export default connect(null, mapDispatchToProps)(ListItem);