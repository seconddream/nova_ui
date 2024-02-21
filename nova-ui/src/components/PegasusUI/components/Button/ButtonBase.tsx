import { ReactNode, useRef } from 'react'
import { WithItemSize } from '../../common/shared_interfaces'
import classNames from 'classnames'
import { ColorTheme, FocusStyle, ItemSizing } from '../../common/default_styles'
import { AiOutlineCheckCircle, AiOutlineExclamationCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'

export interface ButtonBaseProps extends WithItemSize {
  id?: string
  type?: 'primary' | 'secondary' | 'transparent' | 'slient'
  shape?: 'rounded' | 'circle'
  full?: boolean
  icon?: ReactNode
  foucsable?: boolean
  loading?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  disabled?: boolean
  onClick?: () => any
  children: ReactNode
}

export default function ButtonBase(props: ButtonBaseProps) {
  const {
    id,
    type = 'secondary',
    shape = 'rounded',
    full = false,
    size = 'md',
    icon,
    foucsable = false,
    loading = false,
    success = false,
    warning = false,
    danger = false,
    disabled = false,
    onClick,
    children,
  } = props

  const circle = shape === 'circle'

  const isAbnormalState = loading || success || warning || danger || disabled
  const shouldNotInteract = loading || success || disabled
  const shouldOverWriteIcon = loading || success || warning

  const elRef = useRef<HTMLDivElement>(null)

  return (
    <div
      id={id}
      ref={elRef}
      tabIndex={foucsable && !shouldNotInteract ? 0 : undefined}
      className={classNames(
        'flex flex-shrink-0 font-medium transition-all ease-out justify-center items-center whitespace-nowrap focus:outline-none',
        // sizing
        ItemSizing.FontSize[size],
        ItemSizing.Height[size],
        { [ItemSizing.PaddingX[size]]: !circle, [ItemSizing.Width[size]]: circle },
        ItemSizing.Gap[size],
        { 'rounded-full': circle, [ItemSizing.RoundCorner[size]]: !circle },
        {
          'w-full': full,
          'w-fit': !full,
          // colors
          [`${ColorTheme[type].bg} ${ColorTheme[type].text} ${ColorTheme[type].hoverBg} ${ColorTheme[type].hoverText}`]:
            !isAbnormalState,
          [`${ColorTheme.success.bg} ${ColorTheme.success.text}`]: success,
          [`${ColorTheme.warning.bg} ${ColorTheme.warning.text} ${ColorTheme.warning.hoverBg} ${ColorTheme.warning.hoverText}`]:
            warning,
          [`${ColorTheme.danger.bg} ${ColorTheme.danger.text} ${ColorTheme.danger.hoverBg} ${ColorTheme.danger.hoverText}`]:
            danger,
          [`${ColorTheme.disabled.bg} ${ColorTheme.disabled.text}`]: loading || disabled,
          // interactions
          [`hover:cursor-pointer active:scale-100 hover:scale-110 focus:ring-2 ${FocusStyle.Item}`]: !shouldNotInteract,
          ['hover:cursor-not-allowed']: shouldNotInteract,
          ['hover:shadow-xl active:shadow-none']: !shouldNotInteract && type !== 'slient',
        }
      )}
      onMouseDown={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick?.()
      }}
      onKeyDown={(e) => {
        if (foucsable && e.key === 'Enter') {
          elRef.current?.blur()
          onClick?.()
        }
      }}
    >
      {(shouldOverWriteIcon || icon) && (
        <span className={classNames(ItemSizing.IconSize[size], { 'animate-spin': loading })}>
          {loading && <AiOutlineLoading3Quarters />}
          {success && <AiOutlineCheckCircle />}
          {warning && <AiOutlineExclamationCircle />}
          {!shouldOverWriteIcon && icon ? icon : null}
        </span>
      )}
      {children}
    </div>
  )
}
