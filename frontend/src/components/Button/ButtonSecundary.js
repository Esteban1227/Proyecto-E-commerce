import React from 'react'
import "./Button.css"
export default function ButtonSecundary({className, children, onClick, type}) {
  return (
    <button onClick={onClick} type={type ? type : "button"} className={`${className} button_secundary`}>{children}</button>
  )
}
