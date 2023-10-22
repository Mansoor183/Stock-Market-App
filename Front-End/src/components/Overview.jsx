import React from 'react'
import Card from './Card'
const Overview = ({symbol,price,change,changePercent,currency}) => {
  return (
    <Card>
      <span className=' absolute left-2 top-1 text-neutral-400 text-md xl:text-xl'>
            {symbol}
        </span>
        <div className='w-full h-full flex text-center justify-around'>
            <span className='text-md xl:text-4xl flex items-center'>
                ${price}
                <span className='text-md xl:text-xl text-neutral-400 m-2'>
                    {currency}
                </span>
            </span>
            <span className={`text-md xl:text-xl ${change>0 ? "text-lime-500" : "text-red-500"}`}>
                {change} <span>({changePercent}%)</span>
            </span>
        </div>
    </Card>
  )
}

export default Overview
