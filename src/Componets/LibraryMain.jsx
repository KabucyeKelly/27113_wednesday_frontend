import { useState } from "react";
import LibraryButton from "./LibraryButton";
import LibraryHeader from "./LibraryHeader";

function LibraryMain(){

const [count, setCount] = useState(0);

function incrementNumber(){
    setCount(count+1);
    console.log("This is the incrmenet value "+ count);
}
    const books =[
{
    code:"seng1",
    name:"software engineering",
    price: 100

},
{
    code:"math1",
    name:"math eng",
    price: 200

},
{
    code:"fin1",
    name:"finance eng",
    price: 400

},

    ]


const totalPrice = books.reduce((sum, book) => sum + book.price, 0);


return (
        <>
        <LibraryHeader />
            <div>
                <h2>The list of available books</h2>
                <div>{books.length > 0 ? (
  <ul>
        {books.map((book) => (
      <li key={book.code}>
        {book.code} - {book.name} - ${book.price}
      </li>
    ))}
  </ul>
) : (
  <p>No books available.</p>
)}</div>
            </div>

    <div>{books.length > 0 && (
  <div>The total price for {books.length} books is ${totalPrice}</div>
)}</div>

<div> <main>
        <LibraryButton buttonLabel="Increment" 
         buttonAction={incrementNumber}></LibraryButton>
         <h2>Increment value is {count}</h2>
    </main></div>
        </>
    
)


}

export default LibraryMain;