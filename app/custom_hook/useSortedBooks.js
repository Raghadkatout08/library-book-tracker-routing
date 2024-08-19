function useSortedBooks(books) {
    if (!Array.isArray(books)) return [];
  
    const sortedBooks = books.slice().sort((a, b) => a.title.localeCompare(b.title));
  
    console.log(sortedBooks); 
    return sortedBooks;
  }
  
export default useSortedBooks;