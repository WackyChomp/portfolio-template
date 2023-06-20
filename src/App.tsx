import { useState, useEffect } from 'react'
import './index.css';
import { SelectedPage } from './shared/types';

import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);     // ensures enum string type
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <div className='app bg-gray-20'>
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
