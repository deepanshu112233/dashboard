// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import About from './components/About';
// import NavigationBar from './components/navbar/NavigationBar';
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';

// function App() {
//   let [counter, setCounter] = useState(0);

//   function incCounter() {
//     console.log("callled");
//     setCounter(counter + 1);
//   }
 
//   setTimeout(incCounter, 100);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route  path="/" element={<div> <NavigationBar/> <Home/> </div>} />
//         <Route  path="/home" element={<div><NavigationBar/> <Home/> </div>} />
//         <Route path="/dashboard" element={ <Dashboard/>} />
//         <Route path="/about" element={ <>{<About/>}</>} />

//         {/* Add more routes as needed */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './components/Home';
import Dashboard from './components/coin/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.incCounter, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  incCounter = () => {
    console.log("called");
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><NavigationBar /><Home /></div>} />
          <Route path="/home" element={<div><NavigationBar /><Home /></div>} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<>{<About />}</>} />

          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
