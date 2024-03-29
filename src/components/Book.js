import React,{ Component } from 'react';


const Book = ({book}) => {

    return(
        <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>      
            <td>{book.year}</td>
            <td>
                <button type="button" className="btn btn-danger">Delete</button>
                <button type="button" className="btn btn-default">Edit</button>
            </td>
        </tr>
    )
}
export default Book;
