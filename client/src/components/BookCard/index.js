import React from 'react';


function BookCard(props) {
  return (
      <div className="row">
    {props.books.map(book => (
          <div className="card mb-3 w-100" key={
            book._id
              ? book._id
              : book.googleBookId
          }> {/*style="max-width: 540px;" */}
            <div className="row no-gutters">
            <h4 className="card-header w-100">{book.title}</h4>
            </div>
            <div className='row'>
              <div className="col-md-2">
                <img src={book.thumbnail} className="card-img" alt={book.title}></img>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  
                  <h5 className="card-text" >{book.authors.join(', ')}</h5>
                  <p className="card-text">{book.description}</p>
                  <div className="row">
                  <div className="col-auto">
                  <a className="btn btn-secondary" href={book.link} target="_blank" rel="noopener noreferrer" >View</a>
                  </div>
                  <div className="col-auto">
                  <button className={props.buttonType} 
                  onClick={props.buttonAction}
                      id={
                        book._id
                          ? book._id
                          : book.googleBookId
                      }>{props.buttonText}</button>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
))}
</div>
)
}

export default BookCard;