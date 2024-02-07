import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './navbar/NavBar'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

import rightArrow from './assets/arrowright.png'

import bgImg2 from './assets/bgimg2.png'

import googleLogo from './assets/googlelogo.png'
import { comboData } from './data'

import Details from './detailsContent/Details'
import Card from './Crd/Card'

function App() {

  const menu = comboData.map((item,index)=>{
    return(
    <div key={index} className='course-card'>
          <div className='card-tag'>
            <p>{item.cardTag}</p>
          </div>

          {/* <div className='card-image'></div> */}
          <img className='card-image' src={item.cardImage}/>

          <p className='card-name'>{item.cardTitle}</p>

          <div className='card-btm-section'>
            <div className='card-price'>
              <p className='cross'>${item.prePrice}</p>

              <p className='normal-price'>${item.proPrice}</p>
            </div>

            <img className='gg-logo' src={googleLogo} alt=''/>
          </div>
        </div>
  )}
  )
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  
  
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

  return (
    <>
      <div className='app-container'>
        <NavBar/>
        <section id='fs' className='first-section'>
          
          <p className='first-txt'>
            Surf the <br className='web'/>
            <span className='color-txt1'>tech wave</span> <br className='mobile'/> with us!
          </p>

          <p className='first-snd-txt'>
            Whether you're a software development enthusiast, interested<br className='web'/> 
            in learning data science, or eager to dive into the world of<br className='web'/> 
            interface design.
          </p>

          <button className='first-scn-btn'>
            <p className='first-scnbtn-txt'>
              Explore now
            </p>

            <div className='right-arrow'></div>
            {/* <img className='right-arrow' src={rightArrow} alt=''/> */}
          </button>
          
        </section>

        <section className='second-section'>
          <p className='sc2-bgtxt'>
            We are a platform <span className='color-txt1'>dedicated</span><br/> 
            to <span className='color-txt1'>continuous learning</span>
          </p>

          <div className='main-container'>
            <div className='left-box'>
              <p className='lbx-fir-txt'>New knowledge</p>

              <p className='lbx-snd-txt'>Start your tech journey without even knowing anything yet</p>

              <p className='lbx-trd-txt'>You will master technologies never seen before, with classes and didactic videos.</p>
              {/* <div className='fill-d-space'></div> */}
              <button className='second-scn-btn'>
                <p className='second-scnbtn-txt'>
                  View more
                </p>
                <img className='right-arrow-2' src={rightArrow} alt=''/>
              </button>
            </div>

            {/* <div className='right-box'></div> */}
            <img className='right-box' src={bgImg2} alt=''/>
          </div>
        </section>

        <section className='third-section'>

          <p className='third-bgtxt'>See examples of some <span className='color-txt1'>courses</span></p>

          <p className='third-smtxt'>Advanced teaching methods with awards<br className='web'/> 
            according to the development at the end of the course</p>

            {/* <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
            /> */}
          <Card/>
        </section>

        <section id='aboutus' className='fourth-section'>
          <p className='sc2-bgtxt'>Why take courses on <span className='color-txt1'>CodeWave</span>?</p>

          <Details
            rowDirection={'cb-forward'}
          />

          <Details
            rowDirection={'cb-reverse'}
          />

          <Details
            rowDirection={'cb-forward'}
          />

          <Details
            rowDirection={'cb-reverse'}
          />
        </section>

        <section id='courses' className='fifth-section'>

          <div>
            <p className='fifth-bg-txt'>Courses on <span className='color-txt1'>Programming</span></p>
            <Card/>
          </div>

          <div>
            <p className='fifth-bg-txt'>Courses on <span className='color-txt1'>UI/UX Design</span></p>
            <Card/>
          </div>

          <div>
            <p className='fifth-bg-txt'>Courses on <span className='color-txt1'>Financial Education</span></p>
            <Card/>
          </div>

          <div className='all-courses-btn-container'>
            <button className='btn'>See All Courses</button>
          </div>

        </section>
      </div>
    </>
  )
}

export default App
