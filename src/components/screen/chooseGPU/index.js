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
                      <h4>Graphic Card:</h4>
                      <h4>Storage:</h4>
                      <h4>Box:</h4>
                    </div>
                  <div className="products">
                    <div className="product">
                          <img src="https://hardmyware.com/wp-content/uploads/2020/06/GPU-Entrada.jpg"/>
                      </div>
                      <div className="product">
                      <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/08/20/15347882501818.jpg"/>
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