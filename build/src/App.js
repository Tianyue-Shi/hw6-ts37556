// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import './App.css';
import Component from "./components/Component.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>EE461L HW6</h1>
        {/*  component gets first name field and returns last name */}
        <Component />
      </header>
    </div>
  );
}

export default App;