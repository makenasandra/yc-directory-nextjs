import React from 'react';
import {array} from "ts-interface-checker";

async function Books(props) {
    const response = await fetch("http://localhost:3000/api/books");
    if(!response.ok) throw new Error("Failed to fetch!");
    const books = await response.json();

    return (
        <div>
            {
                books.map((book:{id:number, name:string})=> (
                    <div>
                        <h3>Book Name: {book.name}</h3>
                        <p>Book ID: {book.id}</p>
                    </div>)
                )
            }
        </div>
    );
}

export default Books;