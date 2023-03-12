import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, lightTheme, darkTheme } from "./GlobalStyle";
import Products from './components/Products/Products'
import { ThemeProvider } from "styled-components";
import ViewProduct from './components/ViewProduct/ViewProduct';
import Cart from './components/Cart/Cart';
import CartIcon from './components/CartIcon/CartIcon';
import { theme } from "./GlobalStyle"
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <ToastContainer style={{ fontSize: "2rem" }} />
        <CartIcon />
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/view-product/:id" element={<ViewProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </React.StrictMode>
      </Router>
    </ThemeProvider>
  );
}

export default App;
