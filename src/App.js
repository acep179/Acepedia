import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import { NavBar, SideBar } from './components';
import { Dashboard,Inbox,Customers, Products, Profile } from './pages';

function App() {

  const [isSideBarCollapse, setIsSideBarCollapse] = useState(false)
  const [sideBarWidth, setSideBarWidth] = useState('')

  const sideBarCollapse = () => {

    const elements = document.querySelectorAll('[data-sidebar="text"]')
    elements.forEach(element => {
      element.classList.toggle('hidden')
    });

    const listParent = document.querySelector('[data-sidebar="list-parent"]')
    listParent.classList.toggle('items-center')

  }
  
  useEffect(() => {
    sideBarCollapse()
    let fixedSideBar = document.getElementById('fixedSideBar')
    setSideBarWidth(fixedSideBar.offsetWidth)
  }, [isSideBarCollapse])

  return (
    <div className='bg-white dark:bg-gray-900 relative'>
      <NavBar isSideBarCollapse={isSideBarCollapse} setIsSideBarCollapse={setIsSideBarCollapse} />
      <div className='flex'>
        <SideBar sideBarWidth={sideBarWidth} />
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
