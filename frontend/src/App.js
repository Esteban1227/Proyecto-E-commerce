import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FormInformationShipping from "./pages/FormInformationShipping/FormInformationShipping";
import "./App.css";
import FormLoginAndLogout from "./pages/FormLoginAndLogout/FormLoginAndLogout";
import Shop from "./pages/Shop/Shop";
import FormCreateProduct from "./pages/FormCreateProduct/FormCreateProduct";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import FormChangeUserData from "./pages/FormChangeUserData/FormChangeUserData";
import Checkout from "./pages/Checout/Checkout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(null); // Aquí guardamos la información del usuario

  const [productDetail, setproductDetail] = useState(null); // Aquí guardamos la información del usuario

  // Función para manejar el inicio de sesión exitoso
  // Función para manejar el inicio de sesión exitoso y guardar la información del usuario
  const handleProductDetail = (product) => {
    setproductDetail(product);
  };
  
  // Función para manejar el inicio de sesión exitoso sin información del usuario
  const handleSimpleLogin = (id) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("id", id);
  };

  // Verificar si el usuario está autenticado al cargar la aplicación
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
      setUser(localStorage.getItem("id"));
    }
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/Tienda" />
            ) : (
              <FormLoginAndLogout
                onSimpleLogin={handleSimpleLogin}
              />
            )
          }
        />
        <Route
          path="/Tienda"
          element={
            isLoggedIn ? (
              <Layout onLogout={handleLogout}>
                <Shop
                  handleProductDetail={handleProductDetail}
                  user={user}
                />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/CrearProducto"
          element={
            isLoggedIn ? (
              <Layout>
                <FormCreateProduct id={user}/>
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/DetalleProducto"
          element={
            isLoggedIn ? (
              <Layout>
                <ProductDetails producto={productDetail} />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/EditarInforamcion"
          element={
            isLoggedIn ? (
              <Layout>
                <FormChangeUserData id={user}/>
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/VerificarCompra"
          element={
            isLoggedIn ? (
              <Layout>
                <Checkout />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/InformacionEnvio"
          element={
            isLoggedIn ? (
              <Layout>
                <FormInformationShipping/>
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
