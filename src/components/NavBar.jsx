import profileImage from './../assets/profile.png'
import { CgMenuLeft } from 'react-icons/cg'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import { useEffect, useState } from 'react'

function NavBar() {

  const [theme, setTheme] = useState(localStorage.theme)

  const applyTheme = () => {
    localStorage.theme = theme

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleUserMenu = () => {
    const userMenu = document.getElementById('userMenu')
    userMenu.classList.toggle('hidden')
  }

  useEffect(() => {
    applyTheme()
  })



  return (
    <nav className="bg-white shadow border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <CgMenuLeft className='w-7 h-7 dark:text-slate-300' />
          <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Acepedia</span>
        </a>
        <div className="flex items-center md:order-2 mr-3 relative">
          {theme === 'light' ?
            <BsLightbulb className='w-6 h-6 mr-5 cursor-pointer' onClick={() => setTheme('dark')} />
            :
            <BsLightbulbOff className='w-6 h-6 mr-5 cursor-pointer text-slate-300' onClick={() => setTheme('light')} />
          }
          <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={toggleUserMenu}>
            <span className="sr-only">Open user menu</span>
            <img className="w-10 h-10 rounded-full" src={profileImage} alt="user" />
          </button>

          <div className="hidden absolute top-12 right-0 z-50 text-base list-none rounded divide-y divide-gray-100 shadow-md dark:bg-gray-700 dark:divide-gray-600" id="userMenu">
            <div className="py-3 px-4">
              <span className="block text-sm text-gray-900 dark:text-white">Acep Awaludin</span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">acep.awaludin179@gmail.com</span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar