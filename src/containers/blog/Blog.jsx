import React from 'react'
import {Article} from '../../component'
import {blog01,blog02,blog03,blog04,blog05} from './import'
import './blog.css'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is Happening, We are blogging about it.</h1>

      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date='Sep 26, 2021' text='GPT3 and Open Ai is the Future. Let us Explore how it is?'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date='Sep 27, 2021' text='GPT3 and Open Ai is the Future. Let us Explore how it is?'/>
          <Article imgUrl={blog03} date='Sep 28, 2021' text='GPT3 and Open Ai is the Future. Let us Explore how it is?'/>
          <Article imgUrl={blog04} date='Sep 29, 2021' text='GPT3 and Open Ai is the Future. Let us Explore how it is?'/>
          <Article imgUrl={blog05} date='Sep 30, 2021' text='GPT3 and Open Ai is the Future. Let us Explore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog