import React from 'react';
import Book from './Book';

const bookinfo = [{
  image: "https://m.media-amazon.com/images/I/51rU8blTJIL._SX331_BO1,204,203,200_.jpg ",
  title: "Shreeman yogi",
  author: "Ranjeet desai",
  price: "639"
},

{
  image: "https://m.media-amazon.com/images/I/51rU8blTJIL._SX331_BO1,204,203,200_.jpg ",
  title: "Shreeman yogi",
  author: "Ranjeet desai",
  price: "639"
},

{
  image: "https://m.media-amazon.com/images/I/51rU8blTJIL._SX331_BO1,204,203,200_.jpg ",
  title: "Shreeman yogi",
  author: "Ranjeet desai",
  price: "639"
},

{
  image: "https://m.media-amazon.com/images/I/51rU8blTJIL._SX331_BO1,204,203,200_.jpg ",
  title: "Shreeman yogi",
  author: "Ranjeet desai",
  price: "639"
},

{
  image: "https://m.media-amazon.com/images/I/51rU8blTJIL._SX331_BO1,204,203,200_.jpg ",
  title: "Shreeman yogi",
  author: "Ranjeet desai",
  price: "639"
},

{
  image: "https://m.media-amazon.com/images/I/51rU8blTJIL._SX331_BO1,204,203,200_.jpg ",
  title: "Shreeman yogi",
  author: "Ranjeet desai",
  price: "639"
}]

const Bookmap = () => {
  return (
    <>
      {bookinfo.map((ele1) => {
        return(
        <div>
          <Book image={ele1.image} title={ele1.title} author={ele1.author} price={ele1.price} />
          </div>
        )
      })}

    </>
  )
}

export default Bookmap;