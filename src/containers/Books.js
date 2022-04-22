import React,{ Component } from 'react';
import {booksdata} from '../data';
import Book from '../components/Book';
import { connect } from 'react-redux;'
class Books extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>YEAR</th>
                        <th>ACTIONS</th>
                    </thead>
                    <tbody>
                        {
                            booksdata.map(book=>{
                                return(
                                    <Book key={book.id} book={book}/>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        books:state.booksData.books || [],
    };
}
export default connect(mapStateToProps,null)(Books);