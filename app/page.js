'use client';
import { useContext, useState } from "react";
import Toast from "./components/Toast";
import Form from "./components/Form";
import BooksList from "./components/BooksList";
import Head from "./head";
import LoginForm from "./components/LoginForm";
import { AuthContext } from "./context/auth";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [lastBook, setLastBook] = useState(null);

  const { token, login } = useContext(AuthContext);

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
    setLastBook(book);
  };

  const handleCloseToast = () => {
    setLastBook(null);
  };

  // const { tokens } = useContext((AuthContext))

  return (
    <div className="flex flex-col min-h-screen" >
      {/* <title>Library Book Tracker</title> */}
      <Head title="Library Book Tracker" />

      {token ? <>
        <meta name="description" content="Library Book Tracker App" />
        <main className="flex-grow p-4 pt-16 relative bg-gray-300 dark:bg-[#353839]">
          <Form onAddBook={handleAddBook} />
          <div className="pt-10">
            <Toast book={lastBook} onClose={handleCloseToast} />
            <BooksList books={books} />
          </div>
        </main>
      </> : <LoginForm />}
    </div>
  );
}