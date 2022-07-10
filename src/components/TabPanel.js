import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconCheckboxes from "./Checkbox";
import Tooltip from "@mui/material/Tooltip";
import "./TabPanel.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    common: "#fff",
  },
  text: {
    primary: "#fff",
    secondary: "#fff",
  },
  typography: {
    fontFamily: "Franklin Gothic Medium",
  },
});

export const TabPanel = ({ data, setData, deleteItem, editItem }) => {
  const [value, setValue] = useState(0);
  const [filterTodo, setFilterTodo] = useState([]);
  const handelTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  //   const classes = useStyles();

  const filterHandler = () => {
    switch (value) {
      case 2:
        setFilterTodo(data.filter((todo) => todo.completed === false));
        break;
      case 1:
        setFilterTodo(data.filter((todo) => todo.completed === true));
        break;
      case 0:
        setFilterTodo(data);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [data, value]);

  return (
    <>
      <Tabs
        sx={{
          bgcolor: "#1b5e47",
          borderRadius: "8px",
          textTransform: "capitalize",
        }}
        sm={{
          bgcolor: "#fff",
          fontWeightBold: 700,
          fontSize: 20,
        }}
        value={value}
        onChange={handelTabs}
      >
        <Tab
          sx={{
            textTransform: "capitalize",
            color: "#498590",
            fontSize: "17px",
          }}
          theme={theme}
          className="tab-item"
          label="All"
        ></Tab>
        <Tab
          sx={{
            textTransform: "capitalize",
            color: "#498590",
            fontSize: "17px",
          }}
          theme={theme}
          label="Completed"
        ></Tab>
        <Tab
          sx={{
            textTransform: "capitalize",
            color: "#498590",
            fontSize: "17px",
          }}
          theme={theme}
          label="UnCompleted"
        ></Tab>
        <h5 className="enter">Make Your List</h5>
      </Tabs>
      <hr
        style={{
          backgroundColor: "#fff",
          padding: "1px",
          border: "none",
          borderRadius: "10%",
          marginBottom: "1rem",
          marginTop: "0.3rem",
        }}
      ></hr>

      {filterTodo.map((valu) => {
        return (
          <>
            <Penal key={valu.id}>
              <div className="input-data">
                <div className="input-heading-data">
                  <div className="checkbox-div">
                    <IconCheckboxes
                      data={data}
                      setData={setData}
                      value={valu}
                    />

                    <div className="return-data">
                      <h5
                        className={`todo ${valu.completed ? "completed" : ""}`}
                      >
                        {valu.name}
                      </h5>
                      <h6 className="date">
                        {valu.today === valu.today ? "Today" : valu.today}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="input-btn">
                  <button
                    className="btn  "
                    onClick={() => {
                      editItem(valu.id);
                    }}
                  >
                    <Tooltip title="Edit">
                      <EditIcon color="primary" />
                    </Tooltip>
                  </button>
                  <button
                    className="btn  "
                    onClick={() => {
                      deleteItem(valu.id);
                    }}
                  >
                    <Tooltip title="Delete">
                      <DeleteIcon color="primary" />
                    </Tooltip>
                  </button>
                </div>
              </div>
            </Penal>
          </>
        );
      })}
    </>
  );
};

function Penal({ children, value, index }) {
  return (
    <div>
      {value === index && <h1 className="input-data_container">{children}</h1>}
    </div>
  );
}
