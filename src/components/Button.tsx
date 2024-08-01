import React from 'react'

type ButtonProps  = {
    type: "button" | "reset" | "submit"
    name: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>)  => void
    className: string
    "data-name": string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={props.className} type={props.type} onClick={props.onClick} data-name={props['data-name']}>
      {props.name}
    </button>
  )
}


