import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Fragment
} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Spinner } from "./spinner";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  contentHide: {
    opacity: 0
  }
}));

export const LayoutContext = createContext({
  state: {},
  isLoading: true,
  setLayoutState: () => {}
});

export function useLayout() {
  return useContext(LayoutContext);
}

export function LayoutProvider({ children, state, customComponent, resize }) {
  const [layout, setLayout] = useState({
    state: state || {},
    isLoading: true,
    setLayoutState: setLayoutState
  });
  const [height, setHeight] = useState(window.innerHeight);
  const classes = useStyles();

  useEffect(() => {
    resize &&
      window.addEventListener("resize", () => setHeight(window.innerHeight));
  }, [resize]);

  function setLayoutState(elem, value) {
    layout.state[elem] !== value &&
      setLayout(prevState => ({
        ...prevState,
        state: {
          ...prevState.state,
          [elem]: value
        }
      }));
  }

  useEffect(() => {
    const isLoading = !Object.keys(layout.state).reduce(
      (acc, curr) => acc && layout.state[curr],
      true
    );
    setLayout(prevState => ({
      ...prevState,
      isLoading
    }));
  }, [layout.state]);

  return (
    <LayoutContext.Provider value={layout}>
      {layout.isLoading ? (
        <Fragment>
          <Grid
            style={{ height: height }}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item>{customComponent || <Spinner />}</Grid>
          </Grid>
          <div className={classes.contentHide}>{children}</div>
        </Fragment>
      ) : (
        children
      )}
    </LayoutContext.Provider>
  );
}
