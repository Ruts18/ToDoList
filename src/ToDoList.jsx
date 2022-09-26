import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

import ListCompo from "./ListCompo";
const ToDoList = () => {
  const [item, setItem] = useState("b");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItem = (event) => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDoList</h1>
          <br />
          <input
            type="Text"
            value={item}
            placeholder="Add An Items"
            onChange={itemEvent}
          />
          <Button onClick={listOfItem}>
            <AddBoxIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val, index) => {
              return <ListCompo key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
