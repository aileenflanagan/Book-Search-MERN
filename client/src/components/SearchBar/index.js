import React from 'react';

function SearchBar(props) {
  return (
<>
<div className="card">
  <div className="card-title">
  <h3>Search</h3>
  </div>

  <div className="card-body">
  <form> 
  <div className="form-row align-items-center">
    <div className="col-auto">
      <label className="sr-only" htmlFor="book-search">Search</label>
      <input type="text" 
       value={props.search}
       onChange={props.handleInputChange}
      className="form-control mb-2" id="book-search" placeholder="Search a Book Title"></input>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2" onClick={props.handleFormSubmit}>Submit</button>
    </div>
  </div>
</form>
</div>
</div>
</>

    // <div className="row">
    //   <div className="col-lg-12">
    //     <div className="card">
    //       <div className="card-body">
    //         <form>
    //           <div className="form-group">
    //             <label htmlFor="book-search">
    //               Search:
    //             </label>
    //             <input type="text"
    //                    value={props.search}
    //                    onChange={props.handleInputChange}
    //                    className="form-control"
    //                    id="book-search"
    //                    placeholder="Eloquent JavaScript 3rd Edition"/>
    //           </div>
    //           <button type="submit"
    //                   className="btn btn-primary"
    //                   onClick={props.handleFormSubmit}>
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SearchBar;