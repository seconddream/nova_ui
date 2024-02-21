import { ReactNode } from 'react'
import { WithPlacement, parsePlacement } from '../../common/shared_interfaces'
import classNames from 'classnames'

export interface PopUpBaseProps extends WithPlacement {
  show?: boolean
  el: ReactNode
  children: ReactNode
}

export default function PopUpBase(props: PopUpBaseProps) {
  const { show=false, position = 'top', el, children } = props

  const { top, bottom, left, right, topLeft, topRight, bottomLeft, bottomRight } = parsePlacement(position)

  return (
    <div className={classNames('relative', {})}>
      <div
        className={classNames('absolute z-10', {
          hidden: !show,
          'bottom-full -translate-y-3': top || topLeft || topRight,
          'top-full translate-y-3': bottom || bottomLeft || bottomRight,
          'left-1/2 -translate-x-1/2': top || bottom,
          'left-0': topLeft || bottomLeft,
          'right-0': topRight || bottomRight,
          'right-full -translate-x-4': left,
          'left-full translate-x-4': right,
          'top-1/2 -translate-y-1/2': left || right,
        })}
      >
        {el}
      </div>
      {children}
    </div>
  )
}
