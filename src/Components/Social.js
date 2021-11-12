import React from "react";
import { GlobalContext } from "../Context";

const Social = () => {
  return (
    <GlobalContext.Consumer>
      {(store) => <h1>{store.theme}</h1>}
    </GlobalContext.Consumer>
  );
};

export default Social;
