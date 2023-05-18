import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Lets Build Something amazing with GPT-3 OpenAi</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, tempore quidem maiores dolore voluptatem culpa veritatis architecto praesentium consequuntur inventore delectus quas quaerat amet obcaecati unde at labore maxime consequatur vel fugiat, id pariatur molestiae?</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your email address'/>
          <button type='Button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>
        </div>
    </div>
  )
}

export default Header