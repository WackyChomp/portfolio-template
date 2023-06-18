import { useState, useEffect } from 'react'
import './index.css';
import Navbar from '@/scenes/navbar';
import { SelectedPage } from './shared/types';

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
    </div>
  )
}

export default App
