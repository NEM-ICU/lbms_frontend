// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // import "./Home.css";

// // // const Home = () => {
// // //   const [books, setBooks] = useState([]);
// // //   useEffect(() => {
// // //     const fetchAllBooks = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:8000/api/books/list");
// // //         setBooks(res.data.books);
// // //       } catch (err) {
// // //         console.log(err);
// // //       }
// // //     };
// // //     fetchAllBooks();
// // //   }, []);
// // //   console.log(books);
// // //   return (
// // //     <div className="container">
// // //       <div className="books">
// // //         {books.map((book) => (
// // //           <div className="book" key={book.isbn}>
// // //             <img
// // //               src="https://www.picmaker.com/assets/images/bookcovermaker/template-1.png"
// // //               alt="cover"
// // //             />
// // //             <h2>{book.name}</h2>
// // //             <p>{book.author}</p>
// // //             <button>Preview</button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // // Home.js
// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // import "./Home.css";

// // const Home = () => {
// //   const [books, setBooks] = useState([]);
// //   useEffect(() => {
// //     const fetchAllBooks = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:8000/api/books/list");
// //         setBooks(res.data.books);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     fetchAllBooks();
// //   }, []);

// //   return (
// //     <div className="container">
// //       <div className="books">
// //         {books.map((book) => (
// //           <div className="book" key={book.isbn}>
// //             <img
// //               src="https://www.picmaker.com/assets/images/bookcovermaker/template-1.png"
// //               alt="cover"
// //             />
// //             <h2>{book.name}</h2>
// //             <p>{book.author}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate();
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/api/books/list");
//         setBooks(res.data.books);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   return (
//     <div className="container">
//       <div className="books">
//         {books.map((book) => (
//           <div className="book" key={book.isbn}>
//             <img
//               src="https://www.picmaker.com/assets/images/bookcovermaker/template-1.png"
//               alt="cover"
//             />
//             <h2>{book.name}</h2>
//             <p>{book.author}</p>
//             <button
//               onClick={() => {
//                 navigate("/preview", { state: { name: "xyz" } });
//               }}
//             >
//               preview
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/books/list");
        setBooks(res.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  useEffect(() => {
    // Filter books based on the search query
    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by book name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="books">
        {filteredBooks.map((book) => (
          <div className="book" key={book.isbn}>
            <img src={book.cover} alt="cover" />
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <button
              onClick={() => {
                navigate("/preview", { state: { book: book } });
              }}
            >
              Preview
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
