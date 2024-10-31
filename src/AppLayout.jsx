import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import SideBar from './components/SideBar';


function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isCartShowing, setIsCartShowing] = useState(false);
  
    const openSidebar = () => {
      setScrollPosition(window.scrollY);
      setIsSidebarOpen(true);
      document.body.style.overflow = 'hidden';
    };
  
    
  
    const closeSidebar = () => {
      setIsSidebarOpen((option) => !option);
      document.body.style.overflow = 'auto';
    };
  
    useEffect(() => {
      if (!isSidebarOpen) {
        window.scrollTo(0, scrollPosition);
      }
    }, [isSidebarOpen, scrollPosition]);
  

  return (
    <div>
      {isSidebarOpen ? (
        <SideBar onClose={closeSidebar} />
      ): (
        <div className='flex flex-col gap-0 min-h-screen'>
        <Header  onMenuClick={openSidebar}/>

        <main className='flex-grow'>
            <Outlet />
        </main>
        <Footer />
    </div>
      )}
      </div>
  )
}

export default AppLayout
