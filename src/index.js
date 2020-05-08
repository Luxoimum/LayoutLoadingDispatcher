import React, { useState } from "react";
import ReactDOM from "react-dom";
import Demo from "./App";
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
      <Typography align="center" variant="h5">
        Click option below to see demos (just one for now)
      </Typography>
      <List>
        <ListItem button dense onClick={selectOption(1)}>
          <ListItemText primary="Demo 1: Countdown loading" />
        </ListItem>
      </List>
    </div>
  );
  const optionSelected = {
    1: <Demo />
  };
  return option ? optionSelected[option] : <Menu />;
}

ReactDOM.render(<App />, rootElement);
