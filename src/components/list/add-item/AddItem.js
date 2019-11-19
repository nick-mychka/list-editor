import React, { PureComponent } from "react";
import { connect } from 'react-redux';

import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

import { addItem } from '../../../actions';
import { uuid } from "../../../utils/uuid";

import "./AddItem.scss";

class AddItem extends PureComponent {
    state = {
        title: ""
    }

    get hasValue() {
        return !!this.state.title.trim();
    }

    onInputChange = event => {
        this.setState({ title: event.target.value });
    };

    handleKeyUp = event => {
        if (event.key === "Enter") {
            this.handleAddItem();
        }
    };

    handleAddItem = () => {
        const { addItem, parent } = this.props;
        const { title } = this.state;

        if (this.hasValue) {
            const item = {
                id: uuid(),
                name: title,
                hasSublist: false
            };

            addItem(item, parent);

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

                <Button clicked={this.handleAddItem} disabled={!this.hasValue}>
                    Add Item
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addItem
}

export default connect(null, mapDispatchToProps)(AddItem);