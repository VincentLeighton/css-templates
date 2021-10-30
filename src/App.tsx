import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        A simple app to switch beween several layouts. The layouts will be
        designed using CSS
      </header>
      <body className="App-body">
        {/* Hotdog layout */}
        <div className="hotdog-layout">
          <div className="layout-child">1</div>
          <div className="layout-child">2</div>
        </div>
        {/* Hamburger layout */}
        <div className="hamburger-layout">
          <div className="layout-child">1</div>
          <div className="layout-child">2</div>
        </div>
        {/* 2/3 1/3 vertical layout */}
        <div className="twothird-onethird-layout">
          <div className="layout-child">1</div>
          <div className="layout-child">2</div>
        </div>
        {/* Vertiacl 1/2 vertical 1/2 divided */}
        <div className="oneandtwo-layout">
          <div className="layout-child">1</div>
          <div className="oneandtwo-child">
            <div className="layout-child">2</div>
            <div className="layout-child">3</div>
          </div>
        </div>
        {/* Quartered page */}
        <div className="quarters-layout">
          <div className="quarters-child">
            <div className="layout-child">1</div>
            <div className="layout-child">2</div>
          </div>
          <div className="quarters-child">
            <div className="layout-child">3</div>
            <div className="layout-child">4</div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
