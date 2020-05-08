import React, {
  useState,
  useEffect,
  createContext,
  Fragment
} from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { Spinner } from './spinner'
import "./styles.css";

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: theme.palette.primary.contrastText
  },
}));

export const LayoutContext = createContext({
  state: false,
  isLoading: true,
  setLayoutState: () => {}
});

export default function LayoutProvider({ children, state, customComponent, resize }) {
  const [layout, setLayout] = useState({
    state: state || false,
    isLoading: true,
    setLayoutState: setLayoutState
  });
  const [height, setHeight] = useState(window.innerHeight);
  const classes = useStyles()

  useEffect(() => {
    resize &&
      window.addEventListener("resize", () => setHeight(window.innerHeight));
  }, [resize]);

  function setLayoutState() {
    const [ primary, secondary] = arguments
    typeof layout.state === 'object' &&
    layout.state[primary] !== secondary &&
      setLayout(prevState => ({
        ...prevState,
        state: {
          ...prevState.state,
          [primary]: secondary
        }
      }));
    typeof layout.state === 'boolean' &&
      setLayout(prevState => ({
        ...prevState,
        state: primary
      }));

  }

  useEffect(() => {
    let isLoading;
    if (typeof layout.state === 'object') {
      isLoading = !Object.keys(layout.state).reduce(
        (acc, curr) => acc && layout.state[curr],
        true
      );
    } else if (typeof layout.state === 'boolean') {
      isLoading = !layout.state;
    } else {
      console.error('Excpected value of the state of LayoutProvider to be an object or boolean');
      console.trace();
    }
    setLayout(prevState => ({
      ...prevState,
      isLoading: isLoading === undefined ? true : isLoading
    }));
  }, [layout.state]);

  return (
    <LayoutContext.Provider value={layout}>
      {layout.isLoading ? (
        <Fragment>
          <Grid
            className={classes.grid}
            style={{ height: height }}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item>{customComponent || <Spinner/>}</Grid>
          </Grid>
          <div style={{opacity: 0}} >{children}</div>
        </Fragment>
      ) : (
        children
      )}
    </LayoutContext.Provider>
  );
}
