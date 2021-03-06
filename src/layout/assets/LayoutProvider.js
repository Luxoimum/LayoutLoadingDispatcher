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
    backgroundColor: theme.palette.primary.contrastText,
    float: 'left',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000
  },
}));

export const LayoutContext = createContext({
  state: false,
  isLoading: true,
  setLayoutState: () => {}
});

export default function LayoutProvider({ children, state, customComponent}) {
  const [layout, setLayout] = useState({
    state: state || false,
    isLoading: true,
    setLayoutState: setLayoutState
  });
  const classes = useStyles()

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
            container
            justify="center"
            alignItems="center"
          >
            <Grid item>{customComponent || <Spinner/>}</Grid>
          </Grid>
          <div>{children}</div>
        </Fragment>
      ) : (
        children
      )}
    </LayoutContext.Provider>
  );
}
