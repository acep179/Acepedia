import profileImage from './../assets/profile.png'
import { RiPieChart2Fill } from 'react-icons/ri'
import { BsBoxSeam, BsMailbox2, BsPeopleFill } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function SideBar({ sideBarWidth, title }) {

  return (

    <aside className="before:block before:w-full min-w-[] before:mb-14 duration-300" style={{ width: sideBarWidth }} aria-label="Sidebar" id="sideBar">
      <div className="fixed z-10 py-4 px-3 bg-gray-50 shadow-md shadow-slate-400 rounded dark:bg-gray-800" id="fixedSideBar">
        <Link to="/profile" className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg     dark:text-white mb-5 transition-all duration-150 ${title === 'Profile' ? ('bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900 dark:hover:bg-emerald-800 border-l-2 border-emerald-500 hover:border-emerald-600 dark:hover:border-emerald-400') : ('hover:bg-slate-100 hover:border-l-2 hover:border-slate-500 dark:hover:border-slate-200 dark:hover:bg-gray-700')}`}>
          <span className="sr-only">Open user menu</span>
          <img className="w-10 h-10 my-3 rounded-full" src={profileImage} alt="user" />
          <div className="ml-4" data-sidebar="text">
            <p className="text-sm text-gray-900 dark:text-white">Acep Awaludin</p>
            <p className="text-sm font-medium text-gray-500 truncate dark:text-gray-400">acep.awaludin179@gmail.com</p>
          </div>
        </Link>
        <div className='flex flex-col justify-between h-[76vh]' data-sidebar="list-parent">
          <ul className="space-y-2">
            <li>
              <Link to="/" className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg     dark:text-white mb-5 transition-all duration-150 ${title === 'Dashboard' ? ('bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900 dark:hover:bg-emerald-800 border-l-2 border-emerald-500 hover:border-emerald-600 dark:hover:border-emerald-400') : ('hover:bg-slate-100 hover:border-l-2 hover:border-slate-500 dark:hover:border-slate-200 dark:hover:bg-gray-700')}`}>
                <RiPieChart2Fill className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className="ml-3" data-sidebar="text">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/inbox" className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg     dark:text-white mb-5 transition-all duration-150 ${title === 'Inbox' ? ('bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900 dark:hover:bg-emerald-800 border-l-2 border-emerald-500 hover:border-emerald-600 dark:hover:border-emerald-400') : ('hover:bg-slate-100 hover:border-l-2 hover:border-slate-500 dark:hover:border-slate-200 dark:hover:bg-gray-700')}`}>
                <BsMailbox2 className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className="flex-1 ml-3 whitespace-nowrap" data-sidebar="text">Inbox</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200" data-sidebar="text">3</span>
              </Link>
            </li>
            <li>
              <Link to="/customers" className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg     dark:text-white mb-5 transition-all duration-150 ${title === 'Customers' ? ('bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900 dark:hover:bg-emerald-800 border-l-2 border-emerald-500 hover:border-emerald-600 dark:hover:border-emerald-400') : ('hover:bg-slate-100 hover:border-l-2 hover:border-slate-500 dark:hover:border-slate-200 dark:hover:bg-gray-700')}`}>
                <BsPeopleFill className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className="flex-1 ml-3 whitespace-nowrap" data-sidebar="text">Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg     dark:text-white mb-5 transition-all duration-150 ${title === 'Products' ? ('bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900 dark:hover:bg-emerald-800 border-l-2 border-emerald-500 hover:border-emerald-600 dark:hover:border-emerald-400') : ('hover:bg-slate-100 hover:border-l-2 hover:border-slate-500 dark:hover:border-slate-200 dark:hover:bg-gray-700')}`}>
                <BsBoxSeam className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className="flex-1 ml-3 whitespace-nowrap" data-sidebar="text">Products</span>
              </Link>
            </li>
          </ul>
          <div>
            <button className="flex items-center mb-5 p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-100 hover:border-l-2 hover:border-red-500 dark:hover:border-red-200 transition-all duration-150 dark:hover:bg-red-900 w-full">
              <HiOutlineLogout className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
              <span className="flex-1 ml-3 whitespace-nowrap text-left" data-sidebar="text">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar