import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

function Provider(props) {
  const [theme, setTheme] = useState("dark");
  const [products, setProducts] = useState([]);

  const changeProducts = (newproducts) => {
    setProducts(newproducts);
  };

  const addProducts = (newproduct) => {
    setProducts([...products, newproduct]);
  };

  const removeProducts = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const store = {
    theme,
    changeTheme,
    products,
    changeProducts,
    addProducts,
    removeProducts,
  };

  return (
    <GlobalContext.Provider value={store}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default Provider;
