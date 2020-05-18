// import React, { Component } from "react";
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

// ==== COMPONENTS =====
// import Navbar from 
// import Search from 
// import Saved from
// import Book from 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <h2>Google Books</h2>
        <Route exact path="/" component={Search} />
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/saved" component={Saved} />
        {/* <Route exact path="/books/:id" component={Book} /> */}
      </div>
    </Router>
  );
}

  // class App extends Component {
  //   render() {
  //     return (
  //       <div className="App">
  //         <div className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //           <h2>Welcome to React</h2>
  //         </div>
  //         <p className="App-intro">
  //           To get started, edit <code>src/App.js</code> and save to reload.
  //         </p>
  //       </div>
  //     );
  //   }
  // }

  export default App;
