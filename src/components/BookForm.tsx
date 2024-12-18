import React from 'react';
import { useForm } from 'react-hook-form';
import { Book } from '../App';

interface BookFormProps {
  addBook: (book: Book) => void;
}

export const BookForm: React.FC<BookFormProps> = ({ addBook }) => {
  const { register, handleSubmit, reset } = useForm<Book>();
  const onSubmit = (data: Book) => {
    addBook({ ...data, id: Date.now(), price: parseFloat(data.price as any) });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
      <input {...register('title')} placeholder="Title" required />
      <input {...register('author')} placeholder="Author" required />
      <select {...register('genre')} required>
        <option value="">Select Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <input
        {...register('price')}
        placeholder="Price"
        type="number"
        step="0.01"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
