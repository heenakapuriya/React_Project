import React from "react";
import Book from "./JSON/filter.json";

const List = Book.filter(person => person.type === "Action" && person.auther === "Agatha Christie");

const listItem = List.map(person => 
    <li>
        <img src={person.image} alt={person.title} />
        <p>
        TITLE: <b>{person.title}</b><br></br>
        TYPE: <b>{person.type}</b><br></br>
        AUTHER: <b>{person.auther}</b><br></br>
        PRICE: <b>{person.price}</b><br></br>
        </p>
    </li>
);

export default function Lists() {
    return (
       
            <ul>
            {listItem}
            </ul>
       
    )
}