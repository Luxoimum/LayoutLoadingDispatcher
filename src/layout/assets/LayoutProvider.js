import React, {
  useState,
  useEffect,
  Fragment
} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LayoutContext from './LayoutContext';
import "./styles.css";

const useStyles = makeStyles(() => ({
  contentHide: {
    opacity: 0
  }
}));

export default function LayoutProvider({ children, state, customComponent, resize }) {
  console.log('LayoutProvider', state)
  const [layout, setLayout] = useState({
    state: state || false,
    isLoading: true,
    setLayoutState: setLayoutState
  });
  console.log('A_LayoutProviderRender')
  // const [height, setHeight] = useState(window.innerHeight);
  const classes = useStyles();
  console.log('B_LayoutProviderRender')

  /*useEffect(() => {
    resize &&
      window.addEventListener("resize", () => setHeight(window.innerHeight));
  }, [resize]);*/

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
  console.log('C_LayoutProviderRender')

  /*useEffect(() => {
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
  }, [layout]);*/
  return (
    <LayoutContext.Provider value={layout}>
      {layout.isLoading ? (
        <Fragment>
          <Grid
            style={{ height: window.innerHeight }}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item>{customComponent || 'Loading'}</Grid>
          </Grid>
          <div className={classes.contentHide}>{children}</div>
        </Fragment>
      ) : (
        children
      )}
    </LayoutContext.Provider>
  );
}
