import React from "react";
import { GlobalContext } from "../Context";

const Showcase = () => {
  return (
    <GlobalContext.Consumer>
      {(store) => {
        return <button onClick={store.changeTheme}>O'zgartirish</button>;
      }}
    </GlobalContext.Consumer>
  );
};

export default Showcase;
