
import './App.css';
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import HeroAdd from './components/HeroAdd/HeroAdd';
import HeroPending from './components/HeroPending/HeroPending';
import HeroDone from './components/HeroDone/HeroDone';

import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState(false)

    const changeMode = () => {
        setMode(prevMode => !prevMode)

        console.log(mode)
    }

    
    
  return (

    
      <div className="App">
        <HashRouter>
        <Routes>
        <Route path='/add' element={<HeroAdd 
                        handleClick={changeMode}
                        theme={mode}/>} />
            <Route path='/' element={<Hero 
                        handleClick={changeMode}
                        theme={mode}/>} />
            <Route path='pending' element={<HeroPending 
                             handleClick={changeMode}
                             theme={mode}
                              />} />
            <Route path='done' element={<HeroDone 
                      handleClick={changeMode}
                      theme={mode}
            />} />
          </Routes>
        </HashRouter>
      </div>
      
    
  );
}

export default App;
