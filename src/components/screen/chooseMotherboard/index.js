import './style.css';
import React from 'react';
import Header from '../../shared/header/index';
import Footer from '../../shared/footer/index';
import {Button} from '@mui/material';
import { Routes, Route, Outlet, Link } from "react-router-dom";

window.onload = function(){
  var imagen = document.getElementsByTagName("img")[0];
  var imagen1 = document.getElementsByTagName("img")[1];
  imagen.onclick= function(){
    <Link to="/cpu"></Link>
  };
  imagen1.onclick= function(){
    <Link to="/cpu"></Link>
  };
}


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
                      <h4>Motherboard:</h4>
                      <h4>Ram:</h4>
                      <h4>Graphic Card:</h4>
                      <h4>Storage:</h4>
                      <h4>Box:</h4>
                    </div>
                  <div className="products">
                    <div className="product">
                          <img src="https://www.muycomputer.com/wp-content/uploads/2019/02/gigabyte-x299.jpg"/>
                      </div>
                      <div className="product">
                      <img src="https://m.media-amazon.com/images/I/51rhTydYBOL._AC_.jpg"/>
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