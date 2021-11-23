import * as React from "react";
import { Routes ,Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChooseOption from '../src/components/layout/chooseOption/index';
import ChooseCPU from '../src/components/screen/chooseCPU/index';
import Motherboard from '../src/components/screen/chooseMotherboard/index';
import Ram from '../src/components/screen/chooseRAM/index';
import Gpu from '../src/components/screen/chooseGPU/index';
import Storage from '../src/components/screen/chooseStorage/index';
import Case from '../src/components/screen/chooseCase/index';

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<ChooseOption/>} />
        <Route path='/cpu' element={<ChooseCPU/>} />
        <Route path='/motherboard' element={<Motherboard/>} />
        <Route path='/ram' element={<Ram/>} />
        <Route path='/gpu' element={<Gpu/>} />
        <Route path='/storage' element={<Storage/>} />
        <Route path='/case' element={<Case/>} />
    </Routes>
    </>
  );
}

export default App;