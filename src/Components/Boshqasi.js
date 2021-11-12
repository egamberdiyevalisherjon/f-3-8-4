import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const Boshqasi = () => {
  const store = useContext(GlobalContext);

  const a = 1;

  return <button onClick={store.changeTheme}>Boshqasi {a}</button>;
};

export default Boshqasi;
