import React from 'react'

type InputProps = {
    type: "text"
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    name: string
    className: string
}

export const Input = (props: InputProps) => {
  return (
    <input type={props.type} onChange={props.onChange} name={props.name} value={props.value} className={props.className}/>
  )
}
