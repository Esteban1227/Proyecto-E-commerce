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
import FormUserData from "./pages/FormUserData/FormUserData";
import Checkout from "./pages/Checkout/Checkout";
import FormChangeProductData from "./pages/FormChangeProductData/FormChangeProductData";

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
    console.log(id)
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
      <Layout onLogout={handleLogout}>
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
              <>
                <Shop
                  handleProductDetail={handleProductDetail}
                  user={user}
                />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/CrearProducto"
          element={
            isLoggedIn ? (
                <FormCreateProduct id={user}/>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/DetalleProducto"
          element={
            isLoggedIn ? (
                <ProductDetails producto={productDetail} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/EditarInforamcion"
          element={
            isLoggedIn ? (
                <FormUserData id={user}/>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/VerificarCompra"
          element={
            isLoggedIn ? (
                <Checkout />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/InformacionEnvio"
          element={
            isLoggedIn ? (
                <FormInformationShipping/>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/Tienda/EditarInformacionProudcto"
          element={
            isLoggedIn ? (
                <FormChangeProductData/>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>

      </Layout>
    </Router>
  );
}

export default App;
