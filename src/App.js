import { useEffect, useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import { NavBar, SideBar } from './components';
import { Dashboard,Inbox,Customers, Products, Profile } from './pages';

function App() {

  const location=useLocation()

  //* Set dark mode when first time visiting the website 
  if(!localStorage.theme){
    localStorage.theme = 'dark'
  }

  const [title, setTitle] = useState('')

  useEffect(() => {

    let temporaryTitle

    switch (location.pathname) {

      case '/inbox':
        temporaryTitle = 'Inbox'
        break;
    
      case '/customers':
        temporaryTitle = 'Customers'
        break;
    
      case '/products':
        temporaryTitle = 'Products'
        break;
    
      case '/profile':
        temporaryTitle = 'Profile'
        break;
    
      default:
        temporaryTitle = 'Dashboard'
        break;
    }

    setTitle(temporaryTitle)
    document.title = 'Nutechpedia | ' + temporaryTitle
  },[location])

  const [isSideBarCollapse, setIsSideBarCollapse] = useState(true)
  const [sideBarWidth, setSideBarWidth] = useState('')

  const sideBarCollapse = () => {

    //* Hide text when sidebar is collapse 
    const elements = document.querySelectorAll('[data-sidebar="text"]')
    elements.forEach(element => {
      element.classList.toggle('hidden')
    });

    //* centering icon and profile image when sidebar collapse 
    const listParent = document.querySelector('[data-sidebar="list-parent"]')
    listParent.classList.toggle('items-center')

  }
  
  useEffect(() => {
    sideBarCollapse()
    let fixedSideBar = document.getElementById('fixedSideBar')
    setSideBarWidth(fixedSideBar.offsetWidth)
  }, [isSideBarCollapse])

  return (
    <div className='bg-white dark:bg-gray-900 relative dark:text-white min-h-screen'>
      <NavBar isSideBarCollapse={isSideBarCollapse} setIsSideBarCollapse={setIsSideBarCollapse} />
      <div className='flex'>
        <SideBar sideBarWidth={sideBarWidth} title={title} />
        <div className='mt-20 px-4 mx-auto w-3/4'>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/inbox' element={<Inbox/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
