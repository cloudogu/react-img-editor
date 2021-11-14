import React from 'react'
import { prefixCls } from '../../common/constants'

interface FontSizeSettingProps {
  value?: number;
  onChange: (fontSize: number) => void;
}

export default function FontSizeSetting(props: FontSizeSettingProps) {
  return (
    <span style={{ margin: '0 8px' }}>
      <button
        className={`${prefixCls}-font-size ${props.value === 16 ? prefixCls + '-font-size-activated' : ''}`}
        onClick={() => props.onChange(16)}
      >S</button>
      <button
        className={`${prefixCls}-font-size ${props.value === 24 ? prefixCls + '-font-size-activated' : ''}`}
        onClick={() => props.onChange(24)}
      >M</button>
      <button
        className={`${prefixCls}-font-size ${props.value === 32 ? prefixCls + '-font-size-activated' : ''}`}
        onClick={() => props.onChange(32)}
      >L</button>
    </span>
  )
}