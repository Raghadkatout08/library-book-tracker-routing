'use client';
import { useState } from "react";
import Toast from "./components/Toast";
import Form from "./components/Form";
import BooksList from "./components/BooksList";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [lastBook, setLastBook] = useState(null);
  

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
    setLastBook(book);
  };

  const handleCloseToast = () => {
    setLastBook(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>Library Book Tracker</title>
      <meta name="description" content="Library Book Tracker App" />
      <main className="flex-grow p-4 pt-16 relative">
        <Form onAddBook={handleAddBook} />
        <div className="pt-10">
          <Toast book={lastBook} onClose={handleCloseToast} />
        <BooksList books={books} />
        </div>

      </main>
    </div>
  );
}