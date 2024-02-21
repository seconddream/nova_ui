import classNames from 'classnames'
import { Color, WithItemSize } from '../../common/shared_interfaces'
import { ItemSizing } from '../../common/default_styles'

const LabelColors = {
  white: {
    border: 'border-slate-600',
    text: 'text-slate-700',
    bg: 'bg-white',
  },
  gray: {
    border: 'border-slate-500',
    text: 'text-slate-500',
    bg: 'bg-slate-100',
  },
  amber: {
    border: 'border-amber-600',
    text: 'text-amber-600',
    bg: 'bg-amber-100',
  },
  emerald: {
    border: 'border-emerald-600',
    text: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  teal: {
    border: 'border-teal-600',
    text: 'text-teal-600',
    bg: 'bg-teal-100',
  },
  sky: {
    border: 'border-sky-600',
    text: 'text-sky-600',
    bg: 'bg-sky-100',
  },
  indigo: {
    border: 'border-indigo-600',
    text: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  fuchsia: {
    border: 'border-fuchsia-600',
    text: 'text-fuchsia-600',
    bg: 'bg-fuchsia-100',
  },
  pink: {
    border: 'border-pink-600',
    text: 'text-pink-600',
    bg: 'bg-pink-100',
  },
  rose: {
    border: 'border-rose-600',
    text: 'text-rose-600',
    bg: 'bg-rose-100',
  },
}

export interface LabelProps {
  id?: string
  size?: 'sm' | 'xs'
  color?: Color
  bordered?: boolean
  shadow?: boolean
  text: string
}

export default function Label(props: LabelProps) {
  const { id, size = 'xs', color = 'white', bordered = false, shadow = false, text } = props
  return (
    <div
      id={id}
      className={classNames(
        'flex whitespace-nowrap hyphens-auto justify-center items-center',
        // sizing
        ItemSizing.Height[size],
        ItemSizing.PaddingX[size],
        ItemSizing.FontSize[size],
        ItemSizing.IconSize[size],
        ItemSizing.Gap[size],
        ItemSizing.RoundCorner[size],
        // color
        LabelColors[color].text,
        LabelColors[color].bg,
        { [`border ${LabelColors[color].border}`]: bordered, ['shadow']: shadow }
      )}
    >
      {text}
    </div>
  )
}
