import Image from 'next/image'
import React from 'react'


export default function WeatherIcon (
  props: React.HTMLProps<HTMLDivElement> & { iconName: string }
) {
  return (
    <div {...props} title={props.iconName} className={`relative h-20 w-20 ${props.className}`}>
      <Image 
        alt='weather-icon'
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
        width={100}
        height={100}
        className='w-100 h-100 absolute'
      />

    </div>
    )
}