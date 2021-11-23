import * as React from "react";
import { Routes ,Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChooseOption from '../src/components/layout/chooseOption/index';
import ChooseCPU from '../src/components/screen/chooseCPU/index';
import Motherboard from '../src/components/screen/chooseMotherboard/index';

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<ChooseOption/>} />
        <Route path='/cpu' element={<ChooseCPU/>} />
        <Route path='/motherboard' element={<Motherboard/>} />
    </Routes>
    </>
  );
}

export default App;