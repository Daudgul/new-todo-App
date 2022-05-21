import React, { useState } from "react";
import "./App.css";
import Error from "./components/Error";
import Container from "./components/Container";
import { TabPanel } from "./components/TabPanel";

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [toggleData, setToggleData] = useState(true);
  const [editText, setEditText] = useState(null);
  const [error, setError] = useState();
  const [filterTodo, setFilterTodo] = useState([]);
  // ;

  const changeHendler = (e) => {
    setTask(e.target.value);
  };

  ////////////////////////////////

  const dateTime = () => {
    const date = new Date();
    const fullTime =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return fullTime + " " + time;
  };

  ///////////////////////////////////

  const submitHandler = (a) => {
    a.preventDefault();
    if (task.trim().length < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name (non-empty values).",
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
      setTask("");
      setEditText(null);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        name: task,
        today: dateTime(),
        completed: false,
      };
      setData([...data, newData]);
      setTask("");
    }
  };

  ////////////////////////////////////////

  const deleteItem = (a) => {
    if (!toggleData) {
      setError({
        title: "Invalid input",
        message: "Please first edit your input .",
      });
    } else {
      const finalData = data.filter((value) => {
        return a !== value.id;
      });
      setData(finalData);
      setTask("");
    }
  };
  ////////////////////////////////////////////////

  const editItem = (id) => {
    let findItem = data.find((e) => {
      return e.id === id;
    });
    setTask(findItem.name);
    setEditText(id);
    setToggleData(false);
  };

  //////////////////////////////////////

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
          <div className="sub-container">
            <ul className="return-input">
              <TabPanel
                data={data}
                setFilterTodo={setFilterTodo}
                setData={setData}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            </ul>
            <Container
              submitHandler={submitHandler}
              toggleData={toggleData}
              task={task}
              changeHendler={changeHendler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
