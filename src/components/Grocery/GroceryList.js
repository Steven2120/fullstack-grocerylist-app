import React, { Component } from "react";
import PropTypes from "prop-types";
import "./GroceryList.css";
import Button from "../common/Button";

export class GroceryList extends Component {
  state = {
    canEdit: false,
    editInput: this.props.item.grocery,
  };

  onHandleEditClick = () => {
    this.setState((prevState) => {
      return {
        canEdit: !prevState.canEdit,
      };
    });
  };

  handleEditOnChange = (event) => {
    this.setState({
      editInput: event.target.value,
    });
  };

  onHandleEditSubmit = (id) => {
    this.onHandleEditClick();
    this.props.handleEditByID(id, this.state.editInput);
  };

  render() {
    return <div></div>;
  }
}

export default GroceryList;
