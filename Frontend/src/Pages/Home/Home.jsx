import React from 'react'
import FreeBook from '../../Components/FreeBook'
import Banner from '../../Pages/Banner/Banner'

const Home = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Banner />
      <FreeBook />
    </div>
  )
}

export default Home
