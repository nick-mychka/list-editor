import React from "react";
import Button from "../../../common/button/Button";

const MoveUpButton = ({ clicked }) => (
    <Button clicked={clicked} btnVariant="btn-light">
        <i className="fas fa-arrow-up" />
    </Button>
);

const MoveDownButton = ({ clicked }) => (
    <Button clicked={clicked} btnVariant="btn-light">
        <i className="fas fa-arrow-down" />
    </Button>
);

const AddSublistButton = ({ clicked }) => (
    <Button clicked={clicked} btnVariant="btn-outline-success">
        <i className="fas fa-plus" />
    </Button>
);

const RemoveSublistButton = ({ clicked }) => (
    <Button clicked={clicked} btnVariant="btn-outline-danger">
        <i className="fas fa-minus" />
    </Button>
);

const RemoveItemButton = ({ clicked }) => (
    <Button clicked={clicked} btnVariant="btn-danger">
        <i className="fas fa-trash-alt" />
    </Button>
);

export {
    MoveUpButton,
    MoveDownButton,
    RemoveItemButton,
    AddSublistButton,
    RemoveSublistButton
};