export type Color = 'white' | 'gray' | 'amber' | 'emerald' | 'teal' | 'sky' | 'indigo' | 'fuchsia' | 'pink' | 'rose'

export type ItemSize = 'lg' | 'md' | 'sm' | 'xs'
export interface WithItemSize {
  size?: ItemSize
}
export function parseItemSize(size: ItemSize) {
  return {
    lg: size === 'lg',
    md: size === 'md',
    sm: size === 'sm',
    xs: size === 'xs',
  }
}

export type Direction = 'horizontal' | 'vertical'
export interface WithDirection {
  direction?: Direction
}
export function parseDirection(direction: Direction) {
  const horizontal = direction === 'horizontal'
  const vertical = direction === 'vertical'
  return { horizontal, vertical }
}

export type Placement = 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
export interface WithPlacement {
  position?: Placement
}
export function parsePlacement(position: Placement) {
  const top = position === 'top'
  const bottom = position === 'bottom'
  const left = position === 'left'
  const right = position === 'right'
  const topLeft = position === 'topLeft'
  const topRight = position === 'topRight'
  const bottomLeft = position === 'bottomLeft'
  const bottomRight = position === 'bottomRight'
  return {
    top,
    bottom,
    left,
    right,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  }
}

