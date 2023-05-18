import React from 'react'
import  {Article,Brand,CTA, Navbar} from './component'
import  {Footer, Blog, Possibility, Feature, WhatGPT3, Header} from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />

        </div>
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        
    </div>
  )
}

export default App