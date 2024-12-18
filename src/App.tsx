import React, { useState } from 'react';
import { BookForm } from './components/BookForm';
import { BookTable } from './components/BookTable';
import { FilterBooks } from './components/FilterBooks';
import './App.css';


export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
}

 const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filters, setFilters] = useState({ genre: '', author: '' });

  const addBook = (newBook: Book) => setBooks((prev) => [...prev, newBook]);

  const editBook = (updatedBook: Book) =>
    setBooks((prev) =>
      prev.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );

  const deleteBook = (id: number) =>
    setBooks((prev) => prev.filter((book) => book.id !== id));

  const filteredBooks = books.filter((book) =>
    (filters.genre ? book.genre === filters.genre : true) &&
    (filters.author ? book.author.toLowerCase().includes(filters.author.toLowerCase()) : true)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bookstore Inventory</h1>
      <BookForm addBook={addBook} />
      <FilterBooks setFilters={setFilters} />
      <BookTable
        books={filteredBooks}
        editBook={editBook}
        deleteBook={deleteBook}
      />
    </div>
  );
};

export default App

