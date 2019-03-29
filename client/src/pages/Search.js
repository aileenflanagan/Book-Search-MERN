import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchBar';
import BookCard from '../components/BookCard';
// import Container from "../components/Layout/container";
// import Wrapper from "../components/Layout/wrapper";

const formatBookResults = googleApiResults => {
    const bookArray = [];
  
    googleApiResults.map(book => {
  
      const formattedBook = {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors
          ? book.volumeInfo.authors
          : ['N/A'],
        description: book.volumeInfo.description
          ? book.volumeInfo.description
          : 'Not Available.',
        googleBookId: book.id,
        googleBookId: book.id,
        thumbnail: book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/170px-No_image_available.svg.png',
        link: book.volumeInfo.canonicalVolumeLink     
      };
  
      bookArray.push(formattedBook);
      return bookArray
    });
    return bookArray;
  };
  
  class Search extends Component {
    state = {
      search: '',
      results: [],
      error: ''
    };
  
    // For some reason the routes are not connecting 
    //error is xhr.js:173 POST http://localhost:3000/api/books 404 (Not Found)
    
    saveBook = event => {
  
      const chosenBook = this.state.results.find(book => book.googleBookId === event.target.id);
  
      const newSave = {
        title: chosenBook.title,
        authors: chosenBook.authors,
        description: chosenBook.description,
        googleBookId: chosenBook.googleBookId,
        thumbnail: chosenBook.thumbnail,
        link: chosenBook.link,
      };
  
      API.saveBook(newSave)
        .then(res => {
          console.log(res.status, res.statusText);
          // this.props.alert.show('Book Saved!', {type: 'success'})
          alert("Book Saved!");
        })
        .catch(err => {
          console.log(err);
          // this.props.alert.show('Sorry, There was an issue with something back here...', {
          //   type: 'error',
          //   timeout: 5000
          // })
          alert("Sorry, something went wrong");
        })
    };
  
    // Method handling the change of the input field.
    handleInputChange = event => {
      this.setState({search: event.target.value})
    };
  
    // Method handling the submission of the Search form, makes a call to retrieve the results of the search
    // from Google Books API.
    handleFormSubmit = event => {
      event.preventDefault();
      console.log(`Search for: ${this.state.search}`);
      API.searchBooks(this.state.search)
        .then(res => {
          
          const formattedArray = formatBookResults(res.data.items);
          this.setState({results: formattedArray});
        })
        .catch(err => console.log(err))
    };
  
    render() {
      return (
          <div>
              {/* <Wrapper> */}
        <div className="container">
          <Jumbotron/>
          <SearchForm
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <BookCard
            books={this.state.results}
            buttonAction={this.saveBook}
            buttonType="btn btn-success mt-2"
            buttonText="Save Book"
          />
        </div>
        {/* </Wrapper> */}
          </div>
      );
    }
  }
  

  export default Search;