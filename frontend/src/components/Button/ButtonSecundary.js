import React from 'react'
import "./Button.css"
export default function ButtonSecundary({className, children, onClick}) {
  return (
    <button onClick={onClick} type='button' className={className + " button_secundary"}>{children}</button>
  )
}
