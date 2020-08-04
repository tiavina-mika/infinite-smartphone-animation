import React from "react";
import { createUseStyles } from "react-jss";

import PlugSvg from "./PlugSvg";
import "./styles.css";

const useStyles = createUseStyles({
  root: {
    composes: "flexColumn alignCenter justifyCenter",
    height: "100vh"
  },
  main: {
    composes: "flexRow justifyCenter "
  },
  img: {
    width: "90%"
  },
  svg: {
    transform: "skew(24deg, -4deg) rotateY(55deg) translateX(-2px)",
    position: "absolute"
  },
  mask: {
    position: "absolute",
    transform:
      "skew(24deg, -4deg) rotateY(55deg) translateX(-30px) translateY(45px)",
    backgroundColor: "#fff",
    width: 420,
    height: 490
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <img alt="phone" src={`../iphone.png`} className={classes.img} />
        {/* <Svg  className={classes.svg}/> */}
        <div className={classes.mask} />
        <PlugSvg className={classes.svg} />
      </div>
    </div>
  );
};

export default App;
