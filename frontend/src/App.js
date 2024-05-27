//React
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Pages
import FormInformationShipping from "./pages/FormInformationShipping/FormInformationShipping";
import FormLoginAndLogout from "./pages/FormLoginAndLogout/FormLoginAndLogout";
import Shop from "./pages/Shop/Shop";
import FormCreateProduct from "./pages/FormCreateProduct/FormCreateProduct";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import FormChangeProductData from "./pages/FormChangeProductData/FormChangeProductData";
import Cart from "./pages/Cart/Cart";
import UserData from "./pages/UserData/UserData";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Hooks
import { useLoginAndLogout } from "./hooks/useLoginAndLogout";

//Componets
import Layout from "./components/Layout/Layout";

//Context
import CartProvider from "./context/cart";
import { ProductProvider } from "./context/product";
import { ProductsUserProvider } from "./context/productsUser";
import { ProductDetailProvider } from "./context/productDetail";
import { ProductEditProvider } from "./context/productEdit";
import { ProductReviewProvider } from "./context/productReview";
import { CategoryProvider } from "./context/category";

function App() {
  const { isLoggedIn } = useLoginAndLogout();

  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <ProductsUserProvider>
            <ProductDetailProvider>
              <ProductEditProvider>
                <ProductReviewProvider>
                  <Layout>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          isLoggedIn ? (
                            <Navigate to="/Tienda" />
                          ) : (
                            <FormLoginAndLogout />
                          )
                        }
                      />
                      <Route
                        path="/Tienda"
                        element={
                          isLoggedIn ? (
                            <>
                              <Shop />
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
                            <FormCreateProduct />
                          ) : (
                            <Navigate to="/" />
                          )
                        }
                      />
                      <Route
                        path="/Tienda/DetalleProducto"
                        element={
                          isLoggedIn ? <ProductDetails /> : <Navigate to="/" />
                        }
                      />
                      <Route
                        path="/Tienda/EditarInforamcion"
                        element={
                          isLoggedIn ? <UserData /> : <Navigate to="/" />
                        }
                      />
                      <Route
                        path="/Tienda/VerificarCompra"
                        element={isLoggedIn ? <Checkout /> : <Navigate to="/" />}
                      />
                      <Route
                        path="/Tienda/InformacionEnvio"
                        element={
                          isLoggedIn ? (
                            <FormInformationShipping />
                          ) : (
                            <Navigate to="/" />
                          )
                        }
                      />
                      <Route
                        path="/Tienda/EditarInformacionProudcto"
                        element={
                          isLoggedIn ? (
                            <FormChangeProductData />
                          ) : (
                            <Navigate to="/" />
                          )
                        }
                      />
                      <Route
                        path="/Tienda/Carrito"
                        element={isLoggedIn ? <Cart /> : <Navigate to="/" />}
                      />
                    </Routes>
                  </Layout>
                </ProductReviewProvider>
              </ProductEditProvider>
            </ProductDetailProvider>
          </ProductsUserProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
