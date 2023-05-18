import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../component'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in eveniet facilis repellat tempora officiis optio nesciunt accusantium natus possimus! Iusto, quisquam? Autem, eos nemo laborum repudiandae, molestiae corrupti quaerat tempore alias esse sapiente ipsam!"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in eveniet facilis repellat tempora officiis optio nesciunt accusantium natus possimus! Iusto, quisquam? Autem, eos nemo laborum repudiandae, molestiae corrupti quaerat tempore alias esse sapiente ipsam!"/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in eveniet facilis repellat tempora officiis optio nesciunt accusantium natus possimus! Iusto, quisquam? Autem, eos nemo laborum repudiandae, molestiae corrupti quaerat tempore alias esse sapiente ipsam!"/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in eveniet facilis repellat tempora officiis optio nesciunt accusantium natus possimus! Iusto, quisquam? Autem, eos nemo laborum repudiandae, molestiae corrupti quaerat tempore alias esse sapiente ipsam!"/>
      </div>
    </div>
  )
}

export default WhatGPT3