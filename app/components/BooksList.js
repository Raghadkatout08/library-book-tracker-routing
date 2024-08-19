import React from 'react';

function BooksList({ books }) {
  if (!books || books.length === 0) {
    return <p className="text-center text-gray-500">No books available.</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {books.map((book, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
          <p className="text-gray-600 mt-2">{book.author}</p>
          <p className="text-gray-500 mt-4 text-sm">{book.description}</p>
          <p className="text-gray-500 mt-4 text-sm">{book.genre}</p>
        </div>
      ))}
    </div>
  );
}
export default BooksList;