import React from 'react'
import './Details.css'

const Details = ({rowDirection}) => {
  return (
    <div className={`content-box ${rowDirection}`}>
        <div className='content-b1'></div>
        <div className='content-b2'>
            <p className='content-bgtxt'>CodeWave</p>
            <p className='content-smtxt'>Our courses and formation programs are created with specialists from the best innovative companies in the world, 
            applying a methodology so you can rule the technologies used in the job market and also include the newest and the current technologies which will impact the future of digital business.</p>
        </div>
    </div>
  )
}

export default Details