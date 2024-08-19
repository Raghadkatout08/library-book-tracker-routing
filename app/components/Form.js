'use client';
import { useState } from 'react';

function Form({ onAddBook }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddBook({ title, author, genre });
      setTitle('');
      setAuthor('');
      setGenre('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Add New Book</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block text-gray-700">Genre:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-yellow-400 text-gray-800 py-2 px-4 rounded hover:bg-yellow-300">Add Book</button>
      </form>
    );
  }
  
  export default Form;