import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Rating = ({value}: any) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
        if (i <= value) {
            stars.push(<BsStarFill key={i} className='text-yellow-500'/>)
        } else if (i - 0.5 === value) {
            stars.push(<BsStarHalf key={i} className='text-yellow-500' />)
        } else {
            stars.push(<BsStar key={i} className='text-yellow-500' />)
        }
    }
    const values = value.toFixed(1)
  return (
    <div className='flex items-center gap-1'>
        {stars}
        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{values}</span>

    </div>
  )
}

export default Rating