import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

function Container({ submitHandler, toggleData, task, changeHendler }) {
  return (
    <>
      <div className="container">
        <div className="container_item">
          <div className="form-container">
            <form onSubmit={submitHandler}>
              {toggleData ? (
                <button className="btn">
                  <Tooltip title="Add">
                    <AddIcon aria-label="add" />
                  </Tooltip>
                </button>
              ) : (
                <button className="btn ">
                  <EditIcon aria-label="add" />
                </button>
              )}
              <input
                className="input"
                placeholder="Add a Task"
                type="text"
                value={task}
                onChange={changeHendler}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
