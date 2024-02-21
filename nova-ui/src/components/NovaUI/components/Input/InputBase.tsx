import { ReactNode, useState } from 'react'
import { WithItemSize } from '../../common/shared_interfaces'
import classNames from 'classnames'
import { BorderTheme, FocusStyle, ItemSizing } from '../../common/default_styles'
import Label from '../Label'

export interface InputBaseProps extends WithItemSize {
  id?: string
  type?: string
  width?: string
  value?: any
  error?: any
  prefix?: string
  suffix?: string
  onChange?: (value:any)=>any
  onEnterPress?: ()=>any
}

export default function InputBase(props: InputBaseProps) {
  const { id, type, width = 'w-80', size = 'md', prefix, suffix, value, error, onChange, onEnterPress } = props
  const isControlled = onChange
  const initValue = value ?? ''
  const [_value, _setValue] = useState(value ?? '')
  const [focus, setFocus] = useState(false)
  return (
    <div
      id={id}
      className={classNames(
        'flex bg-white focus border justify-start items-center',
        width,
        ItemSizing.FontSize[size],
        ItemSizing.Gap[size],
        ItemSizing.Height[size],
        ItemSizing.RoundCorner[size],
        {[BorderTheme.Item]: !error, ['border-rose-500']: error},
        ItemSizing.PaddingX[size],
        {[`${FocusStyle.Item} ring-2`]: focus}
      )}
    >
      {prefix && prefix}
      <input
        className='border-none outline-none w-full'
        type={type}
        value={isControlled ? initValue : _value}
        onFocus={()=>{setFocus(true)}}
        onBlur={()=>{setFocus(false)}}
        onChange={(e) => {
          if (isControlled) {
            onChange(e.target.value)
          } else {
            _setValue(e.target.value)
          }
        }}
        onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            onEnterPress?.()
          }
        }}
      />
      {suffix && <Label color={error ? 'rose' : 'gray'} text={suffix} />}
    </div>
  )
}
