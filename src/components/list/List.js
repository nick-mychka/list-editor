import React, { Fragment } from "react";
import {connect} from 'react-redux';

import AddItem from "./add-item/AddItem";
import ListItem from "./list-item/ListItem";

const List = props => {
    const { list, parent } = props;
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
                        />
                    );

                    const sublist = hasSublist && (
                        <List
                            list={children}
                            parent={item.value}
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

            <AddItem parent={parent} />
        </div>
    );
};

const mapStateToProps = ({nodes}) => {
    return { list: nodes }
};

export default connect(mapStateToProps)(List);