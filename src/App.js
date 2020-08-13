import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from'./components/LineChart';
import BarChart from './components/BarChart';
import NavBar from './components/NavBar';
import Inputs from './components/inputs';
import Pie from './components/Pie.js';
import About from './components/About.js';

function App() {
  return (
    
    
    <div className="App">
    <NavBar />
        <div><Inputs/></div>
      <div className="chart">
      <br/>
      <h2>New Customer Insights</h2>
      <LineChart />
      <center><a href="public\about.html"><button  tybe="submit" >Explore</button></a></center>
      <center><h1>BarChart</h1></center>
      <h2>Repeat Customer Insights</h2>
      <BarChart/>
      
      <center><h1>PieChart</h1></center>
      <Pie/>
      
      
    </div>
    </div>
  );
}

export default App;
