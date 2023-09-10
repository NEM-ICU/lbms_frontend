// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [profile, setProfile] = useState({});
//   const [borrowedBooks, setBorrowedBooks] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Get the token from local storage
//     const userId = localStorage.getItem("userId"); // Get the userId from local storage

//     // Fetch profile data and borrowed books from API
//     const fetchProfileData = async () => {
//       try {
//         const profileResponse = await axios.get(
//           "http://localhost:8000/api/users/profile",
//           {
//             headers: { Authorization: `Bearer ${token}` }, // Include the token in the headers
//           }
//         );
//         setProfile(profileResponse.data);

//         const booksResponse = await axios.get(
//           "http://localhost:8000/api/borrow/borrowed_books/" + 3
//         );
//         console.log(booksResponse.data.data);
//         setBorrowedBooks(booksResponse.data.data);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   return (
//     <div className="profile-container">
//       <h2>Profile</h2>
//       <div>
//         <p>Profile Name: {profile.name}</p>
//       </div>
//       <div>
//         <h3>Borrowed Books</h3>
//         <ul>
//           {borrowedBooks.map((book) => (
//             <li key={book._id}>
//               Book: {book.bookData.name} <br />
//               Return Date: {book.due_date.split("T")[0]}
//               {book.lateFee && <span> (Late Fee: {book.lateFee})</span>}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css"; // Import the newly created CSS file

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from local storage
    const userId = localStorage.getItem("userId"); // Get the userId from local storage

    // Fetch profile data and borrowed books from API
    const fetchProfileData = async () => {
      try {
        const profileResponse = await axios.get(
          "http://localhost:8000/api/users/profile",
          {
            headers: { Authorization: `Bearer ${token}` }, // Include the token in the headers
          }
        );
        setProfile(profileResponse.data);

        const booksResponse = await axios.get(
          "http://localhost:8000/api/borrow/borrowed_books/" + userId
        );
        setBorrowedBooks(booksResponse.data.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <img
        src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
        alt="Profile"
        className="profile-image"
      />
      <div className="profile-section">
        <h3>Profile Name:</h3>
        <p>{profile.name}</p>
      </div>
      <div className="profile-books">
        <h3>Borrowed Books</h3>
        <ul>
          {borrowedBooks.length == 0 ? <h3>No Books to Show</h3> : ""}
          {borrowedBooks.map((book) => (
            <li key={book._id}>
              Book: {book.bookData.name} <br />
              Return Date: {book.due_date.split("T")[0]}
              {book.lateFee && <span> (Late Fee: {book.lateFee})</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
