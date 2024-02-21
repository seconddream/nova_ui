'use client'
import { Button } from '@/components/NovaUI/components/Button'
import ButtonBase from '@/components/NovaUI/components/Button/ButtonBase'
import InputBase from '@/components/NovaUI/components/Input/InputBase'
import Label from '@/components/NovaUI/components/Label'
import Tooltips from '@/components/NovaUI/components/Tooltips'
import {
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineHome,
  AiOutlineSmile,
} from 'react-icons/ai'

export default function Home() {
  return (
    <div className='flex flex-col w-full px-5 py-4 gap-6 text-slate-700'>
      {['lg', 'md', 'sm', 'xs'].map((size, index) => {
        return (
          <div key={index} className='flex gap-6 w-full justify-center'>
            {['primary', 'secondary', 'transparent', 'slient'].map((type, index) => {
              return (
                <ButtonBase icon={<AiOutlineSmile />} key={index} type={type} size={size}>{`${type
                  .charAt(0)
                  .toUpperCase()}${type.slice(1)}`}</ButtonBase>
              )
            })}
            <ButtonBase icon={<AiOutlineSmile />} key={3} size={size} disabled>
              Disabled
            </ButtonBase>
            <ButtonBase icon={<AiOutlineSmile />} key={4} size={size} loading>
              Loading
            </ButtonBase>
            <ButtonBase icon={<AiOutlineSmile />} key={5} size={size} success>
              Success
            </ButtonBase>
            <ButtonBase icon={<AiOutlineSmile />} key={6} size={size} warning foucsable>
              Warning
            </ButtonBase>
            <ButtonBase icon={<AiOutlineSmile />} key={7} size={size} danger>
              Danger
            </ButtonBase>
            <ButtonBase icon={<AiOutlineEye />} key={8} size={size} shape='circle' type='slient' />
            <ButtonBase icon={<AiOutlineClose />} key={10} size={size} shape='circle' type='slient' />
            <ButtonBase icon={<AiOutlineDelete />} key={11} size={size} shape='circle' type='slient' />
          </div>
        )
      })}
      <div className='flex gap-6 w-full justify-center '>
        {['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((postion) => {
          return (
            <Button
              key={postion}
              tooltips='Some tooltips information'
              position={postion}
              icon={<AiOutlineSmile />}
            >{`${postion}`}</Button>
          )
        })}
      </div>
      <div className='flex gap-6 w-full justify-center '>
        {['white', 'gray', 'amber', 'emerald', 'teal', 'sky', 'indigo', 'fuchsia', 'pink', 'rose'].map((color) => {
          return (
            <div key={color} className='flex flex-col gap-2'>
              <Label color={color} text={color} />
              <Label color={color} text={color} bordered />
              <Label color={color} text={color} shadow />
            </div>
          )
        })}{' '}
      </div>
      <div className='flex gap-6 w-full justify-center '>
        <InputBase error={true} suffix='Kg' prefix='https://' />
        <InputBase suffix='Kg' prefix='https://' />
        <Button foucsable onClick={()=>{console.log('login')}}>OK</Button>
      </div>
    </div>
  )
}
