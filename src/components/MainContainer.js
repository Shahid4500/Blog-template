import React from 'react'
import BlogSection from './BlogSection'
import OverviewSection from './OverviewSection'
import TopContents from './TopContents'
const MainContainer = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
    <TopContents/>
    <OverviewSection/>
    <BlogSection/>
    </div>
  )
}

export default MainContainer