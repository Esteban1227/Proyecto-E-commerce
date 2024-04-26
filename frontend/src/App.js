import React, { useState, useEffect, useContext } from "react";
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
import { useLoginAndLogout } from "./hooks/useLoginAndLogout";

function App() {
  const [productDetail, setproductDetail] = useState(null);
  
  const { handleLogout, isLoggedIn, handleSimpleLogin, userId} = useLoginAndLogout()

  const handleProductDetail = (product) => {
    setproductDetail(product);
  };
  return (
    <Router>
      <Layout handleLogout={handleLogout} isLoggedIn={isLoggedIn}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/Tienda" />
              ) : (
                <FormLoginAndLogout onSimpleLogin={handleSimpleLogin} />
              )
            }
          />
          <Route
            path="/Tienda"
            element={
              isLoggedIn ? (
                <>
                  <Shop handleProductDetail={handleProductDetail} user={userId} />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/Tienda/CrearProducto"
            element={
              isLoggedIn ? <FormCreateProduct id={userId} /> : <Navigate to="/" />
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
              isLoggedIn ? <FormUserData id={userId} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/Tienda/VerificarCompra"
            element={isLoggedIn ? <Checkout /> : <Navigate to="/" />}
          />
          <Route
            path="/Tienda/InformacionEnvio"
            element={
              isLoggedIn ? <FormInformationShipping /> : <Navigate to="/" />
            }
          />
          <Route
            path="/Tienda/EditarInformacionProudcto"
            element={
              isLoggedIn ? <FormChangeProductData /> : <Navigate to="/" />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
