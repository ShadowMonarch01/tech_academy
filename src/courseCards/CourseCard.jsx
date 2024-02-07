import React from 'react'
import './CourseCard.css'
import Card from '../Crd/Card'

const CourseCard = () => {
  return (
    <div className='course-card-container'>
        <p className='fifth-bg-txt'>Courses on <span className='color-txt1'>Programming</span></p>
          <Card/>
    </div>
  )
}

export default CourseCard