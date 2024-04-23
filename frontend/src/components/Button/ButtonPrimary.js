import React from 'react'
import "./Button.css"

export default function ButtonPrimary({className, children, onClick, type}) {
  return (
    <button onClick={onClick} type={type ? type : "button"} className={`${className} button_primary`}>{children}</button>
  )
}
