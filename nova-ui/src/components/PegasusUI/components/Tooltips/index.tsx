import { ReactNode, useState } from 'react'
import { WithPlacement } from '../../common/shared_interfaces'
import PopUpBase from '../PopUpBase'
import Label from '../Label'

export interface TooltipsProps extends WithPlacement {
  text: string
  children?: ReactNode
}

export default function Tooltips(props: TooltipsProps) {
  const { text, position = 'top', children } = props
  const [show, SetShow] = useState(false)
  return (
    <div
      onMouseEnter={() => {
        SetShow(true)
      }}
      onMouseLeave={() => {
        SetShow(false)
      }}
    >
      <PopUpBase show={show} el={<Label text={text} color='white' shadow />} position={position}>
        {children}
      </PopUpBase>
    </div>
  )
}
