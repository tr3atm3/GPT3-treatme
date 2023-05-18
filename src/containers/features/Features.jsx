import React from 'react'
import './features.css'
import { Feature } from '../../component'

const featuresData = [
  {title: "Improving and distrust instantly",
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis quo consectetur ducimus voluptatum ab est porro vel a sequi repellendus suscipit, eveniet ipsa similique.'},
  {title: "Become the learner",
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis quo consectetur ducimus voluptatum ab est porro vel a sequi repellendus suscipit, eveniet ipsa similique.'},
  {title: "Message for support",
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis quo consectetur ducimus voluptatum ab est porro vel a sequi repellendus suscipit, eveniet ipsa similique.'},
  {title: "Law county",
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis quo consectetur ducimus voluptatum ab est porro vel a sequi repellendus suscipit, eveniet ipsa similique.'}

]


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index) => <Feature title={item.title} text={item.text} key={item.title + index} />)}
      </div>
    </div>
  )
}

export default Features