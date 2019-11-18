import React, { Fragment } from "react";
import AddItem from "./add-item/AddItem";
import ListItem from "./list-item/ListItem";

const List = props => {
  const { list, parent, handleAddItem, ...otherProps } = props;

  return (
    <div className="ml-2 pl-1 pb-2 border-bottom border-top">
      <div className="py-2">
        {list.map((item, idx) => {
          const {
            value: { id, hasSublist },
            children
          } = item;

          const listItem = (
            <ListItem
              item={item}
              isFirst={idx === 0}
              isLast={idx === list.length - 1}
              {...otherProps}
            />
          );

          const sublist = hasSublist && (
            <List
              list={children}
              parent={item.value}
              handleAddItem={handleAddItem}
              {...otherProps}
            />
          );

          return (
            <Fragment key={id}>
              {listItem}
              {sublist}
            </Fragment>
          );
        })}
      </div>

      <AddItem handleAddItem={handleAddItem} parent={parent} />
    </div>
  );
};

export default List;