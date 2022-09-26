import { CgMenuLeft } from 'react-icons/cg'
import { BsGithub, BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoTriangle } from 'react-icons/io5'

function NavBar({ isSideBarCollapse, setIsSideBarCollapse }) {

  //* Toggle light mode and dark mode theme 
  const [theme, setTheme] = useState(localStorage.theme)
  const applyTheme = () => {
    localStorage.theme = theme

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    applyTheme()
  })

  return (
    <nav className="bg-white text-slate-900 shadow dark:shadow-gray-500 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 fixed z-20 w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center ">
          <button className='hover:bg-slate-100 hover:border-l-2 hover:pl-1 hover:pr-0.5 hover:border-slate-500 transition-all duration-150 rounded-l dark:hover:bg-gray-700 dark:hover:border-slate-200'>
            <CgMenuLeft className='w-7 h-7 dark:text-slate-300' onClick={() => setIsSideBarCollapse(!isSideBarCollapse)} />
          </button>
          <Link to="/" className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Nutechpedia</Link>
        </div>
        <div className="flex items-center md:order-2 mr-3">
          <a className='relative' href="https://github.com/acep179/Nutechpedia" target='_blank' rel="noreferrer">
            <BsGithub className='w-6 h-6 mr-3 dark:text-slate-300 dark:h7 dark:w-7 peer' />
            <div className='hidden peer-hover:block ml-2 absolute bg-gray-600 dark:bg-slate-50 w-max text-slate-600 px-2 py-1 rounded-md -bottom-12 right-0 z-10'>
              <IoTriangle className="w-6 h-6 absolute -top-4 right-3 dark:fill-slate-50" />
              <p className='font-semibold text-slate-50 dark:text-slate-600'>See Source Code</p>
            </div>
          </a>
          <button className='relative'>
            {theme === 'light' ?
              <BsLightbulb className='w-6 h-6 peer' onClick={() => setTheme('dark')} />
              :
              <BsLightbulbOff className='w-6 h-6 peer text-slate-300' onClick={() => setTheme('light')} />
            }
            <div className='hidden peer-hover:block ml-2 absolute bg-gray-600 dark:bg-slate-50 w-max text-slate-600 px-2 py-1 rounded-md -bottom-12 right-0 z-10'>
              <IoTriangle className="w-6 h-6 absolute -top-4 right-0 dark:fill-slate-50" />
              <p className='font-semibold text-slate-50 dark:text-slate-600'>Toggle Theme</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar