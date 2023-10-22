import React from 'react'
import SearchBar from './SearchBar'
import { mockCompanyDetails } from '../constants/mock'
const Header = ({currentView ,toggleView}) => {
  return (
    <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center'>
      <div className='xl:px-32 w-full'>
            <SearchBar/>
      </div>
        <button 
        onClick={toggleView}
         className=' bg-indigo-600 p-4 text-white rounded-md w-[250px]'>
          {currentView === 'dashboard' ? 'Portfolio' : 'Home'}
      </button>
    </div>
  )
}

export default Header