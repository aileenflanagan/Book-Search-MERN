import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from '../components/Jumbotron';
// import Container from "../components/Layout/container";
// import Wrapper from "../components/Layout/wrapper";
import BookCard from "../components/BookCard";

class Saved extends Component {
    state = {
        title: "",
        books: [],
        authors: [],
        description: "",
        image: "",
        link: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

        // For some reason the routes are not connecting 
    //books will not load even with data artificially entered in database.
    //gives xhr.js:173 GET http://localhost:3000/api/books 404 (Not Found)
    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data);
                this.setState({
                    books: res.data
                });
            })
            .catch(err => console.log(err));
    };
    removeBook = (id) => {
        API.deleteBook(id)
            .then(res => alert("Book has been removed!"))
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                {/* <Wrapper> */}

                    <div className="container">
                    {/* <Container> */}
                    <Jumbotron/>
                    <h2>Saved Books</h2>
                    {/* RESULT CARD */}
                            <BookCard
                            books={this.state.books}
                            buttonAction={this.deleteBook}
                            buttonType="btn btn-danger mt-2"
                            buttonText="Delete Book"
                            />
                        
                    {/* </Container> */}
                    </div>
                {/* </Wrapper> */}
            </div>
        );
    }
}

export default Saved;