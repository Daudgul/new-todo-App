import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function AppComponent({
  data,
  addDate,
  changeDateHandler,
  editItem,
  deleteItem,
}) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = () => {
    setSelectedValue(!selectedValue);
  };
  return (
    
  );
}

export default AppComponent;
