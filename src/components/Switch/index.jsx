import { useState } from "react";
import * as C from "./styles";

export const Switch = (props) => {
  const { themeToggle } = props;

  return (
    <C.Switch>
      <input
        type="checkbox"
        aria-label="theme-change"
        onClick={() => themeToggle()}
      />
      <C.Slider />
    </C.Switch>
  );
};
