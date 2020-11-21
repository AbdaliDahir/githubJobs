import classNames from 'classnames'
import { ReactNode, useState, useEffect } from 'react'
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {

  const [darkMode, setDarkModeState] = useState(false)
  const MODE = 'githubJobsColorMode'

  const setDarkMode = (value: boolean) => {
    if (value) {
      localStorage.setItem(MODE, 'dark')
      setDarkModeState(true)
    } else {
      localStorage.setItem(MODE, 'light')
      setDarkModeState(false)
    }
  }

  useEffect(() => {
    if (localStorage.getItem(MODE) === 'dark') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  return (
    <>
      <div className={classNames(darkMode && 'dark')}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
        <div className="container mx-auto">
          <div className={'bg-normal-grey dark:bg-midnight pb-12'}>
            {children}
          </div> 
        </div>
        
        <footer className='bg-white border-t border-normal-grey dark:border-dark-grey dark:border-very-dark-blue dark:bg-very-dark-blue'>
          <div className='text-center conatiner mx-auto'>
            
          </div>
        </footer>
      </div>
    </>
  )
}
