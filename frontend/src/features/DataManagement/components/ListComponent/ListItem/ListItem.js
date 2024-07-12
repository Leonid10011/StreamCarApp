import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ListItem.css";

const ListItem = ({ data, onDelete, onClick, isSelected }) => {
  useEffect(() => {
    console.log("eqwe", data.listName);
  }, [data]);

  return (
    <Card
      className={`mb-2 modify-line-card ${isSelected ? "selected" : ""}`}
      data-id={data._id}
      onClick={() => onClick(data)}
      key={data._id}
    >
      <Card.Body
        data-id={data._id}
        className="p-2 d-flex align-items-center justify-content-start"
      >
        <span
          className="icon-body"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onClick on the Card
            onDelete();
            console.log();
          }}
        >
          <i className="bi bi-trash3"></i>
        </span>
        <span
          style={{ color: "green", fontWeight: "bold", marginRight: "10px" }}
        >
          Name:{" "}
        </span>
        {data.listName}
      </Card.Body>
    </Card>
  );
};

export default ListItem;
