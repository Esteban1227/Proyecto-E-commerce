import React, { useState } from "react";
import "./Checkout.css";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecundary from "../../components/Button/ButtonSecundary";
import { IoReturnDownBackOutline } from "react-icons/io5";

import { BsFillCartCheckFill } from "react-icons/bs";
import { FaMapLocationDot, FaMoneyBills, FaLocationDot } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEditSquare } from "react-icons/md";
import { useCart } from "../../hooks/useCart";
import { formatoPrecio } from "../../utils/formatoPrecio";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    // Agrega la lógica para enviar el formulario si es necesario
  };

  const { cart } = useCart();

  const totalCompra = 
    cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.precio * currentValue.cantidad;
    }, 0);

  return (
    <main className="checkOut">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="container_wizard">
              <div className="row">
                <form id="msform" onSubmit={handleSubmit}>
                  {/* progressbar */}
                  <ul id="progressbar" className="container_wizard_progressbar">
                    <li
                      className={
                        currentStep === 1
                          ? "active"
                          : currentStep > 1
                          ? "active"
                          : ""
                      }
                      id="home"
                    >
                      <div className="container_wizard_progressbar_step">
                        <BsFillCartCheckFill size={"20px"} />
                      </div>
                      <span> Productos </span>
                    </li>
                    <li
                      className={
                        currentStep === 2
                          ? "active"
                          : currentStep > 2
                          ? "active"
                          : ""
                      }
                      id="personalInfo"
                    >
                      <div className="container_wizard_progressbar_step">
                        <FaMapLocationDot size={"20px"} />
                      </div>
                      <span>Envio</span>
                    </li>
                    <li
                      className={
                        currentStep === 3
                          ? "active"
                          : currentStep > 3
                          ? "active"
                          : ""
                      }
                      id="userInfo"
                    >
                      <div className="container_wizard_progressbar_step">
                        <FaMoneyBills size={"20px"} />
                      </div>
                      <span>Metodo de pago</span>
                    </li>
                  </ul>
                  {/* fieldsets */}
                  <fieldset
                    style={{ display: currentStep === 1 ? "block" : "none" }}
                  >
                    <div className="container_wizard_editCart">
                      <span className="container_wizard_editCart_text">
                        Edidar tu carrito
                      </span>
                      <Link to={"/Tienda/carrito"}>
                        <button>
                          <MdEditSquare color="#26b1e7" />
                        </button>
                      </Link>
                    </div>
                    <div className="container_wizard_products">
                      {cart.map((product) => (
                        <div className="container_wizard_product">
                          <img
                            className="container_wizard_product_img"
                            src={product.img_producto}
                            alt=""
                          />
                          <div className="container_wizard_product_info">
                            <span className="container_wizard_product_info_name">
                              {product.nombre} ({product.cantidad})
                            </span>
                            <span className="container_wizard_product_info_price">
                              {formatoPrecio(product.precio)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="container_wizard_buttons">
                      <ButtonPrimary onClick={handleNext}>
                        Continuar
                      </ButtonPrimary>
                    </div>
                  </fieldset>

                  <fieldset
                    style={{ display: currentStep === 2 ? "block" : "none" }}
                  >
                    <div className="contenedor_direccion_main">
                      <h3>Direccion de Envio:</h3>
                      <div className="contenedor_direccion">
                        <input
                          className="contenedor_direccion_input"
                          type="radio"
                          id=""
                          name="direccion"
                        />
                        {/* <img src="./ubicacion.jpg" alt="iconoUbicacion" /> */}
                        <FaLocationDot size={"20px"} color="#26b1e7" />
                        <div className="contenedor_direccion_informacion">
                          <span>Calle 59 # 2bn 60 </span>
                          <span>Cuidad</span>
                        </div>
                      </div>
                      <div className="contenedor_direccion">
                        <input
                          className="contenedor_direccion_input"
                          type="radio"
                          id=""
                          name="direccion"
                        />
                        {/* <img src="./ubicacion.jpg" alt="iconoUbicacion" /> */}
                        <FaLocationDot size={"20px"} color="#26b1e7" />
                        <div className="contenedor_direccion_informacion">
                          <span>Calle 59 # 2bn 60 </span>
                          <span>Cuidad</span>
                        </div>
                      </div>
                      <Link
                        to={"/Tienda/InformacionEnvio"}
                        className="contenedor_direccion_agregar"
                      >
                        <CiCirclePlus size={"30px"} />
                      </Link>
                    </div>
                    <div className="container_wizard_buttons">
                      <ButtonSecundary
                        onClick={handlePrevious}
                        className={"container_wizard_buttons_back"}
                      >
                        <IoReturnDownBackOutline />
                      </ButtonSecundary>
                      <ButtonPrimary
                        onClick={handleNext}
                        className={"container_wizard_buttons_go"}
                      >
                        Continuar
                      </ButtonPrimary>
                    </div>
                  </fieldset>

                  <fieldset
                    style={{ display: currentStep === 3 ? "block" : "none" }}
                  >
                    <div className="contenedor_medio_pago_main">
                      <h3>Metodos de Pago:</h3>
                      <div className="contenedor_medio_pago">
                        <input
                          className="contenedor_medio_pago_input"
                          type="radio"
                          id=""
                          name="pago"
                        />
                        {/* <img src="./bancolombia.jpg" alt="iconoUbicacion"> */}
                        <FaPaypal />
                        <div className="contenedor_pago_informacion">
                          <span>PayPal</span>
                        </div>
                      </div>
                    </div>
                    <div className="container_wizard_buttons">
                      <ButtonSecundary
                        onClick={handlePrevious}
                        className={"container_wizard_buttons_back"}
                      >
                        <IoReturnDownBackOutline />
                      </ButtonSecundary>
                      <ButtonPrimary
                        onClick={handleNext}
                        className={"container_wizard_buttons_go"}
                      >
                        Continuar
                      </ButtonPrimary>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="col-lg-4 order-lg-2 order-2">
            <div className="purchase_summary">
              <div className="purchase_summary_title">Resumen</div>
              <div className="purchase_summary_info d-flex flex-column justify-content-between">
                <div className="purchase_summary_info_products">
                  <span>Productos:</span>
                  <ul>
                    {cart.map((product) => (
                      <li>{product.nombre}</li>
                    ))}
                  </ul>
                </div>
                <div className="purchase_summary_info_total">
                  <span>Total:</span>
                  <ul>
                    <li>{totalCompra}</li>
                  </ul>
                </div>
                
                <PayPalScriptProvider options={{ clientId: "test", currency:"USD" }}>
                  <PayPalButtons 
                    style={{ layout: "horizontal" }} 
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units:[
                          {
                            amount:{  
                              value: totalCompra
                            }
                          }
                        ]
                      })
                    }} 
                    onApprove={async (data, actions) => {
                      const order  = await actions.order?.capture()
                      console.log(order)
                    }}
                    onCancel={async (data, actions) => {
                      const order  = await actions.order?.capture()
                      console.log(order)}}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
