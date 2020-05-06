import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Demo1 } from "../";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const rootElement = document.getElementById("root");

function App() {
  const [option, setOption] = useState(null);
  const selectOption = opt => event => {
    event.preventDefault();
    setOption(opt);
  };
  const Menu = () => (
    <div>
      <Typography variant="h4">Select options below to see demos</Typography>
      <List>
        <ListItem button dense onClick={selectOption(1)}>
          <ListItemText primary="demo 1" />
        </ListItem>
      </List>
    </div>
  );
  const optionSelected = {
    1: <Demo1 />
  };
  return option ? optionSelected[option] : <Menu />;
}

ReactDOM.render(<App />, rootElement);
