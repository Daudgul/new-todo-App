import React, { useState, useEffect } from "react";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import EditIcon from "@mui/icons-material/Edit";
import Error from "./Error";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";

function App() {
  const [task, setTaks] = useState("");
  const [data, setData] = useState([]);
  const [toggleData, setToggleData] = useState(true);
  const [editText, setEditText] = useState(null);
  const [addDate, setAddDate] = useState("");
  const [error, setError] = useState();

  const colorGray = grey[50];
  const changeHendler = (e) => {
    setTaks(e.target.value);
    console.log(task);
  };

  const changeDateHandler = (e) => {
    setAddDate(e.target.value);
    console.log(addDate);
  };

  ////////////////////////////////

  const date = new Date();
  const fullTime =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const dateTime = fullTime + " " + time;
  console.log(dateTime);

  ///////////////////////////////////

  const submitHandler = (a) => {
    a.preventDefault();
    if (task.trim().length < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (task && !toggleData) {
      setData(
        data.map((e) => {
          if (e.id === editText) {
            return { ...e, name: task };
          }
          return e;
        })
      );
      setToggleData(true);
      setTaks("");
      setEditText(null);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        name: task,
        today: dateTime,
      };
      setData([...data, newData]);
      setTaks("");
    }
  };

  ////////////////////////////////////////

  const deleteItem = (a) => {
    if (!toggleData) {
      alert("First Edit your item");
    } else {
      const finalData = data.filter((value) => {
        return a !== value.id;
      });
      setData(finalData);
      setTaks("");
    }
  };

  //////////////////////////////////////

  const editItem = (id) => {
    let findItem = data.find((e) => {
      return e.id === id;
    });
    setTaks(findItem.name);
    setAddDate(findItem.today);
    setEditText(id);
    setToggleData(false);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="main">
        <div className="main-container">
          <div className="sidebar">
            <div className="sidebar-items">
              <h3>Hello</h3>
            </div>
          </div>
          <div className="sub-container">
            <div className="return-input">
              <div className="heading">
                <h1>Believable</h1>
              </div>
              {data.map((valu) => {
                return (
                  <>
                    <div key={valu.id} className="input-data_container">
                      <div className="input-data">
                        <div className="input-heading-data">
                          <h3>{valu.name}</h3>
                          <h6
                            className="date"
                            value={addDate}
                            onChange={changeDateHandler}
                          >
                            {valu.today}:
                          </h6>
                        </div>
                        <div className="input-btn">
                          <button
                            onClick={() => {
                              editItem(valu.id);
                            }}
                          >
                            <EditIcon />
                          </button>
                          <button
                            onClick={() => {
                              deleteItem(valu.id);
                            }}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="container">
              <div className="container_item">
                <div className="form-container">
                  <form onSubmit={submitHandler}>
                    {toggleData ? (
                      <button className="btn">
                        <AddIcon color={colorGray} aria-label="add" />
                      </button>
                    ) : (
                      <button className="btn">
                        <EditIcon color="primary" aria-label="add" />
                      </button>
                    )}
                    <input
                      className="input"
                      type="text"
                      placeholder="Add a Task"
                      value={task}
                      onChange={changeHendler}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
