import { CgMenuLeft } from 'react-icons/cg'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar({ isSideBarCollapse, setIsSideBarCollapse }) {

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
    <nav className="bg-white shadow border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 fixed w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <button>
            <CgMenuLeft className='w-7 h-7 dark:text-slate-300' onClick={() => setIsSideBarCollapse(!isSideBarCollapse)} />
          </button>
          <Link to="/" className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Acepedia</Link>
        </div>
        <div className="flex items-center md:order-2 mr-3">
          {theme === 'light' ?
            <BsLightbulb className='w-6 h-6 cursor-pointer' onClick={() => setTheme('dark')} />
            :
            <BsLightbulbOff className='w-6 h-6 cursor-pointer text-slate-300' onClick={() => setTheme('light')} />
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar