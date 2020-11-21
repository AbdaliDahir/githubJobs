import React from 'react'
import Link from 'next/link';
import classNames from 'classnames'

interface HeaderProps  {
  darkMode: boolean;
  setDarkMode: any
}
function Header({darkMode, setDarkMode}: HeaderProps) {
  
  return (
    <div className='bg-indigo-700'>
      <div className="md:conatiner md:mx-auto">
        <div className="flex items-baseline px-3 py-5">
          <div className="flex-initial">
            <Link href='/'>
              <span className="text-white"> Jobs Dashboard </span>
            </Link>
          </div>
          <div className='flex items-center ml-auto space-x-4'>
            <span
              onClick={() => setDarkMode(!darkMode)}
              role='checkbox'
              tabIndex={0}
              aria-checked='false'
              className={classNames(
                'p-1 items-center relative bg-white inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-12 focus:outline-none focus:shadow-outline'
              )}
            >
              <span
                aria-hidden='true'
                className={classNames(
                  'inline-block w-3.5 h-3.5 transition duration-200 ease-in-out transform bg-violet rounded-full shadow',
                  darkMode ? 'translate-x-5' : 'translate-x-0'
                )}
              ></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
