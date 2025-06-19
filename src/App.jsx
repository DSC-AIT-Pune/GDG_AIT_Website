import React from 'react'
import Footer from './sections/Footer'
import Events from './sections/Events'
import Team from './sections/Team'
import Home from './sections/Home'
import About from './sections/About'

function App() {
  return (
    <>
      <div className='flex flex-col gap-8 mb-4'>
        {/* <Home/> */}
        <About/>
        <Events/>
        <Team/>
        <Footer/>
      </div>

    </>
  )
}

export default App