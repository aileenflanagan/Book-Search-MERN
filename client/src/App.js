import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved"
import Search from "./pages/Search";
import NavBar from "./components/NavBar";


const App = () => (
  <Router>
    <div>
      <NavBar/>
      <Route exact path ="/" component= {Search}/>
      <Route exact path="/saved" component={Saved} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>
);


// class App extends Component {
//   render() {
//     return (
//       <>
//         {/* NAV BAR */}
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <a className="navbar-brand" href="#">Google Books Search</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Search</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Saved</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         {/* MAIN CONTENT */}
//         <div className="container">
          
//           {/* JUMBOTRON/SEARCH BAR */}

//           <div className="jumbotron">
//   <h1 className="display-4">(React) Google Books Search</h1>
//   <p className="lead">Search and save books that seem interesting to you!</p>

// </div>

// <div className="card">
//         {/* Search Bar */}
//   <div className="card-title">
//   <h3>Search</h3>
//   </div>

//   <div className="card-body">
//   <form> 
//   <div className="form-row align-items-center">
//     <div className="col-auto">
//       <label className="sr-only" for="inlineFormInput">Search</label>
//       <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Search a Book Title"></input>
//     </div>
//     <div className="col-auto">
//       <button type="submit" className="btn btn-primary mb-2">Submit</button>
//     </div>
//   </div>
// </form>
// </div>

// </div>
//           <h2>Results</h2>
//           {/* RESULT CARD */}
//           <div className="card mb-3" > {/*style="max-width: 540px;" */}
//             <div className="row no-gutters">
//             <h4 className="card-header w-100">Title</h4>
//             </div>
//             <div className='row'>
//               <div className="col-md-2">
//                 <img src="http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" className="card-img" alt="..."></img>
//               </div>
//               <div className="col-md-10">
//                 <div className="card-body">
                  
//                   <h5 className="card-text" >Author Name</h5>
//                   <p className="card-text">Description: ipsum ipsum ipsum ipsum</p>
//                   <div className="row">
//                   <div className="col-auto">
//                   <button className="btn btn-secondary">View</button>
//                   </div>
//                   <div className="col-auto">
//                   <button className="btn btn-success">Save</button>
//                   </div>
//                   </div>
                  
//                 </div>
//               </div>
//             </div>
//           </div>



//           <div className="row"></div>
//         </div>
//       </>
//     );
//   }
// }

export default App;
