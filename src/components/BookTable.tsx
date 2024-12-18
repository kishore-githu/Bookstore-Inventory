import React, { useState } from 'react';
import { Book } from '../App';

interface BookTableProps {
  books: Book[];
  editBook: (book: Book) => void;
  deleteBook: (id: number) => void;
}

export const BookTable: React.FC<BookTableProps> = ({
  books,
  editBook,
  deleteBook,
}) => {
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleSave = () => {
    if (editingBook) editBook(editingBook);
    setEditingBook(null);
  };

  return (
    <table border={1} style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>
              {editingBook?.id === book.id ? (
                <input
                  value={editingBook.title}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, title: e.target.value })
                  }
                />
              ) : (
                book.title
              )}
            </td>
            <td>
              {editingBook?.id === book.id ? (
                <input
                  value={editingBook.author}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, author: e.target.value })
                  }
                />
              ) : (
                book.author
              )}
            </td>
            <td>
              {editingBook?.id === book.id ? (
                <select
                  value={editingBook.genre}
                  onChange={(e) =>
                    setEditingBook({ ...editingBook, genre: e.target.value })
                  }
                >
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Science Fiction">Science Fiction</option>
                </select>
              ) : (
                book.genre
              )}
            </td>
            <td>
              {editingBook?.id === book.id ? (
                <input
                  type="number"
                  value={editingBook.price}
                  onChange={(e) =>
                    setEditingBook({
                      ...editingBook,
                      price: parseFloat(e.target.value),
                    })
                  }
                />
              ) : (
                `$${book.price.toFixed(2)}`
              )}
            </td>
            <td>
              {editingBook?.id === book.id ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <>
                  <button onClick={() => setEditingBook(book)}>Edit</button>
                  <button onClick={() => deleteBook(book.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
