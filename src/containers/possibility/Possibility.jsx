import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are Beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis, facere porro necessitatibus aliquam assumenda laudantium deleniti voluptatum iste doloremque!</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility