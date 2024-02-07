import React from 'react'
import './Card.css'

import googleLogo from '../assets/googlelogo.png'
import reactLogo from './reactorg.svg'

const Card = () => {
  return (
    <div className='course-card'>
            <div className='card-tag'>
              <p>Programming</p>
            </div>

            {/* <div className='card-image'></div> */}
            <img className='card-image' src={reactLogo}/>

            <p className='card-name'>React Native</p>

            <div className='card-btm-section'>
              <div className='card-price'>
                <p className='cross'>$3000</p>

                <p className='normal-price'>$1500</p>
              </div>

              <img className='gg-logo' src={googleLogo} alt=''/>
            </div>
          </div>
  )
}

export default Card;