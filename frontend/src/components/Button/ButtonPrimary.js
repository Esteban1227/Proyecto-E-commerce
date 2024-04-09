import React from 'react'
import "./Button.css"

export default function ButtonPrimary({className, children, onClick}) {
  return (
    <button onClick={onClick} type='button' className={className + " button_primary"}>{children}</button>
  )
}
