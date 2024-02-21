import { useState } from 'react'
import { WithFormControl, WithItemSize } from '../../common/shared_interfaces'
import classNames from 'classnames'
import { BorderTheme, ColorTheme, FocusStyle, FormItemDefaultWidth, ItemSizing } from '../../common/default_styles'
import Label from '../Label'
import {
  AiOutlineCloseCircle,
  AiOutlineCopy,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai'

export interface InputProps extends WithItemSize, WithFormControl {
  id?: string
  type?: 'number' | 'password' | 'text'
  width?: string
  prefix?: string
  suffix?: string
  showClear?: boolean
  showCopy?: boolean
  allowShowPassword?: boolean
  onEnterPress?: () => any
}

export default function Input(props: InputProps) {
  const {
    id,
    type = 'text',
    width = FormItemDefaultWidth,
    size = 'md',
    prefix,
    suffix,
    value,
    error,
    disabled = false,
    showClear = true,
    showCopy = false,
    allowShowPassword = true,
    onChange,
    onEnterPress,
  } = props

  const isControlled = value !== undefined
  const initValue = isControlled ? (value === null ? '' : value) : ''

  const [_value, _setValue] = useState(initValue)
  const [focus, setFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleValueUpdate = (value: any) => {
    if (isControlled) {
      if (type === 'number') {
        let parsed = parseFloat(value)
        if (!isNaN(parsed)) {
          onChange?.(parsed)
        }
      } else {
        onChange?.(value)
      }
    } else {
      _setValue(value)
    }
  }

  return (
    <div
      id={id}
      className={classNames(
        'flex focus border justify-start items-center',
        { 'bg-white': !disabled, [ColorTheme.disabled.bg]: disabled },
        width,
        ItemSizing.FontSize[size],
        ItemSizing.Gap[size],
        ItemSizing.Height[size],
        ItemSizing.RoundCorner[size],
        { [BorderTheme.Item]: !error, ['border-rose-500']: error },
        ItemSizing.PaddingX[size],
        { [`${FocusStyle.Item} ring-2`]: focus }
      )}
    >
      {prefix && <span className={classNames({ 'text-slate-400': !error, ['text-rose-500']: error })}>{prefix}</span>}
      <input
        disabled={disabled}
        className={classNames('border-none outline-none w-full', {
          [`${ColorTheme.disabled.bg} ${ColorTheme.disabled.text}`]: disabled,
        })}
        type={type === 'password' ? (showPassword ? 'text' : type) : type}
        value={isControlled ? initValue : _value}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        onChange={(e) => {
          handleValueUpdate(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onEnterPress?.()
          }
        }}
      />
      {suffix && <Label color={error ? 'rose' : 'gray'} text={suffix} />}
      {type === 'text' && (showClear || showCopy) && (
        <span
          className={classNames(
            'flex items-center',
            { 'text-slate-400': !error, ['text-rose-500']: error },
            ItemSizing.Gap[size],
            ItemSizing.FontSize
          )}
        >
          {showCopy && (
            <AiOutlineCopy
              className='hover:text-slate-500 hover:cursor-pointer'
              onClick={() => {
                navigator.clipboard.writeText(isControlled ? value : _value)
              }}
            />
          )}
          {showClear && !disabled && (
            <AiOutlineCloseCircle
              className='hover:text-slate-500 hover:cursor-pointer'
              onClick={() => {
                handleValueUpdate('')
              }}
            />
          )}
        </span>
      )}
      {type === 'password' && allowShowPassword && (
        <span
          className={classNames(
            'flex items-center',
            { 'text-slate-400': !error, ['text-rose-500']: error },
            ItemSizing.Gap[size],
            ItemSizing.FontSize
          )}
        >
          {showPassword && (
            <AiOutlineEyeInvisible
              className='hover:text-slate-500 hover:cursor-pointer'
              onClick={() => {
                setShowPassword(false)
              }}
            />
          )}
          {!showPassword && (
            <AiOutlineEye
              className='hover:text-slate-500 hover:cursor-pointer'
              onClick={() => {
                setShowPassword(true)
                setTimeout(() => {
                  setShowPassword(false)
                }, 5000)
              }}
            />
          )}
        </span>
      )}
    </div>
  )
}
