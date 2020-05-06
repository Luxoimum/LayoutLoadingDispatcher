import React, { useState, useEffect } from "react";
import { LayoutProvider, useLayout } from "../src/layoutDispatcher";
import { Grid, Paper, Typography, Box, Button, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(theme => ({
  explanation: {
    backgroundColor: grey[200],
    padding: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  insideFunction: {
    paddingLeft: theme.spacing(1)
  },
  insideItem: {
    paddingLeft: theme.spacing(2)
  },
  insideDoubleItem: {
    paddingLeft: theme.spacing(3)
  },
  paragraph: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    textAlign: "justify"
  }
}));

// Simulating asyncronouse acction by creating sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Creating a custom spinner countdown
function CustomSpinner({ maxCount }) {
  const [tick, setTick] = useState(0);
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const waiting = async () => {
      await sleep(500);
      setTick(tick + 1);
    };
    tick < maxCount * 2 - 1 && waiting();
  }, [tick, maxCount]);
  const number = maxCount - parseInt(tick / 2, 10);
  return (
    <Fade in={tick % 2 === 0}>
      <Typography variant={"h2"}>{number}</Typography>
    </Fade>
  );
}

function CountdownLoadingDemo() {
  const [tick, setTick] = useState(0);
  const { setLayoutState } = useLayout();
  const classes = useStyles();
  useEffect(() => {
    const waiting = async () => {
      await sleep(1e3);
      setTick(tick + 1);
    };
    if (tick > 4) {
      setLayoutState("app", true);
    } else {
      waiting();
    }
  }, [tick, setLayoutState]);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h5" align="center">
          Website just loaded correctly (:
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant={"body1"}>
          There is the{" "}
          <Box display="inline" fontStyle="italic">
            "How to use"
          </Box>{" "}
          code:
        </Typography>
        <Paper className={classes.explanation} elevation={0}>
          <Typography
            variant={"body2"}
            paragraph
          >{`//Using LayoutProvider to setup our state and customizated spinner`}</Typography>
          <Typography variant={"body2"}>{`function Demo() {`}</Typography>
          <Typography
            className={classes.insideFunction}
            variant={"body2"}
          >{`return (`}</Typography>
          <Typography
            className={classes.insideItem}
            variant={"body2"}
          >{`<LayoutProvider`}</Typography>
          <Typography
            className={classes.insideDoubleItem}
            variant={"body2"}
          >{`layoutElements={{ app: false }}`}</Typography>
          <Typography
            className={classes.insideDoubleItem}
            variant={"body2"}
          >{`customComponent={<CustomSpinner maxCount={5} />}`}</Typography>
          <Typography
            className={classes.insideItem}
            variant={"body2"}
          >{`>`}</Typography>
          <Typography
            className={classes.insideDoubleItem}
            variant={"body2"}
          >{`<CountdownLoadingDemo />`}</Typography>
          <Typography
            className={classes.insideItem}
            variant={"body2"}
          >{`</LayoutProvider>`}</Typography>
          <Typography
            className={classes.insideItem}
            variant={"body2"}
          >{`);`}</Typography>
          <Typography
            className={classes.insideFunction}
            variant={"body2"}
          >{`}`}</Typography>
        </Paper>
      </Grid>
      <Typography
        component="div"
        className={classes.paragraph}
        variant={"body1"}
      >
        The component{" "}
        <Box display="inline" fontStyle="italic">
          "CustomSpinner"
        </Box>{" "}
        will create the countdown effect. In addition, the component{" "}
        <Box display="inline" fontStyle="italic">
          "CountdownLoadingDemo"
        </Box>{" "}
        will be waiting 5 secounds until to call the function{" "}
        <Box display="inline" fontStyle="italic">
          "setLayoutState"
        </Box>{" "}
        and set the attribute{" "}
        <Box display="inline" fontStyle="italic">
          "app"
        </Box>{" "}
        to{" "}
        <Box display="inline" fontStyle="italic">
          "true"
        </Box>{" "}
        by this way:
      </Typography>
      <Paper className={classes.explanation} elevation={0}>
        <Typography variant={"body2"} paragraph>
          {`//First, get the instance of "setLayoutState" by calling the "useLayout()" hook`}
        </Typography>
        <Typography variant={"body2"}>
          {`function CustomSpinner({ maxCount }) {`}
        </Typography>
        <Typography className={classes.insideFunction} variant={"body2"}>
          {`const { setLayoutState } = useLayout();`}
        </Typography>
        <Typography align="center" variant={"body2"}>
          .
        </Typography>
        <Typography align="center" variant={"body2"}>
          .
        </Typography>
        <Typography align="center" variant={"body2"}>
          .
        </Typography>
        <Typography
          component="div"
          className={classes.insideFunction}
          variant={"body2"}
        >
          {`//Then, we change the value of the `}
          <Box display="inline" fontStyle="italic">
            LayoutProvider
          </Box>{" "}
          when countdown gets 0
        </Typography>
        <Typography className={classes.insideFunction} variant={"body2"}>
          {`if (countdown === 0) {`}
        </Typography>
        <Typography className={classes.insideDoubleItem} variant={"body2"}>
          {`setLayoutState("app", true)`}
        </Typography>
        <Typography className={classes.insideFunction} variant={"body2"}>
          {`}`}
        </Typography>
        <Typography align="center" variant={"body2"}>
          .
        </Typography>
        <Typography align="center" variant={"body2"}>
          .
        </Typography>
        <Typography align="center" variant={"body2"}>
          .
        </Typography>
      </Paper>
      <Typography
        component="div"
        className={classes.paragraph}
        variant={"body1"}
        paragraph
      >
        In order to change show us the website, the component{" "}
        <Box display="inline" fontStyle="italic">
          "LayoutProvider"
        </Box>{" "}
        will catch that change ("app" === true) and will update the state to
        showing the content hidden at the start.
      </Typography>
      <Button onClick={() => (window.location = window.origin)}>
        Go Back!
      </Button>
    </Grid>
  );
}

export default function Demo() {
  return (
    <LayoutProvider
      state={{ app: false }}
      customComponent={<CustomSpinner maxCount={5} />}
    >
      <CountdownLoadingDemo />
    </LayoutProvider>
  );
}
