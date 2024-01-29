import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { FaSortNumericDownAlt } from "react-icons/fa";
import { FaSortAlphaUpAlt } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaSortNumericUp } from "react-icons/fa";
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;

    if (
      (column.label === "Rate" || column.label === "Stock") &&
      sortColumn.order === "asc"
    )
      return <FaSortNumericUpAlt />;

    if (
      (column.label === "Rate" || column.label === "Stock") &&
      sortColumn.order === "desc"
    )
      return <FaSortNumericDownAlt />;
    if (sortColumn.order === "asc" && column.label != null)
      return <FaSortAlphaUpAlt />;
    if (sortColumn.order === "desc" && column.label != null)
      return <FaSortAlphaDownAlt />;
    return;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
