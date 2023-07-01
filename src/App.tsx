import { useState, useEffect } from 'react'
import './index.css';
import { SelectedPage } from './shared/types';

import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Projects from '@/scenes/projects';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);     // ensures enum string type
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  {/* Backgound color for navbar appears when scroll is moved or away from Home page section */}
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <div className='app bg-gray-20'>
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
