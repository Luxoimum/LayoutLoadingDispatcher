import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function Spinner() {
  const [point, setPoint] = useState(0);

  useEffect(() => {
    const waiting = async () => {
      await sleep(1e3);
      setPoint(point + 1);
    };
    waiting();
  }, [point]);
  const p = Object.keys([...Array(point % 4)])
    .map(() => ".")
    .reduce((acc, curr) => acc + curr, "");
  return <Typography>{`Loading${p}`}</Typography>;
}
