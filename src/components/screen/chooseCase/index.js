import './style.css';
import React from 'react';
import Header from '../../shared/header/index';
import Footer from '../../shared/footer/index';
import {Button} from '@mui/material';
import { Routes, Route, Outlet, Link } from "react-router-dom";

class chooseOption extends React.Component {
    render() {
      return(
          <div>
              <Header />
              <div className="container">
                <div className="chooseText">
                      <div className="text">Pick cpu</div>
                </div>
                  <div className="option">
                    <div className="table">
                      <h4>Pc Spects:</h4>
                      <h4>Cpu: Intel Core I9 1031</h4>
                      <h4>Motherboard: Intel e210 882</h4>
                      <h4>Ram: Hyperx fury 8gb ddr4</h4>
                      <h4>Graphic Card: GTX 2080TI</h4>
                      <h4>Storage: SSD 240GB KINGSTON</h4>
                      <h4>Box: Gabinete Gamer Magnumtech Mt-235gm Con Rgb</h4>
                    </div>
                  <div className="products">
                    <div className="product">
                          <img src="https://toppng.com/uploads/preview/ame-max-expedition-red-gaming-matx-pc-case-rear-led-game-max-expeditio-11563885692vhvq2mtozw.png"/>
                      </div>
                      <div className="product">
                      <img src="https://www.vhv.rs/dpng/d/480-4804648_clx-gaming-pc-kit-image-gaming-pc-case.png"/>
                      </div>
                    </div>
                  </div>
                  
              </div>
              <Footer />
          </div>
      )    
    }
  }

export default chooseOption;