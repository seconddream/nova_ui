'use client'
import { Button } from '@/components/NovaUI/components/Button'

import Input from '@/components/NovaUI/components/Input'
import Label from '@/components/NovaUI/components/Label'
import Tooltips from '@/components/NovaUI/components/Tooltips'
import { useState } from 'react'
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
                <Button icon={<AiOutlineSmile />} key={index} type={type} size={size}>{`${type
                  .charAt(0)
                  .toUpperCase()}${type.slice(1)}`}</Button>
              )
            })}
            <Button icon={<AiOutlineSmile />} key={3} size={size} disabled>
              Disabled
            </Button>
            <Button icon={<AiOutlineSmile />} key={4} size={size} loading>
              Loading
            </Button>
            <Button icon={<AiOutlineSmile />} key={5} size={size} success>
              Success
            </Button>
            <Button icon={<AiOutlineSmile />} key={6} size={size} warning foucsable>
              Warning
            </Button>
            <Button icon={<AiOutlineSmile />} key={7} size={size} danger>
              Danger
            </Button>
            <Button icon={<AiOutlineEye />} key={8} size={size} shape='circle' type='slient' />
            <Button icon={<AiOutlineClose />} key={10} size={size} shape='circle' type='slient' />
            <Button icon={<AiOutlineDelete />} key={11} size={size} shape='circle' type='slient' />
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
      <div className='flex flex-col gap-6 w-full justify-center '>
        <Input error={false} disabled size='lg' value={'ksadjfl'} suffix='.com' prefix='https://' />
        <Input error={false} size='md' suffix='.com' prefix='https://' />
        <Input error={false} size='sm' suffix='.com' prefix='https://' />
        <Input type='password' allowShowPassword={true} />
        <Input type='number' suffix='Kg' />
        <Button
          foucsable
          onClick={() => {
            console.log('login')
          }}
        >
          OK
        </Button>
      </div>
    </div>
  )
}
