import React from 'react';

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<{ genre: string; author: string }>>;
}

const FilterBooks: React.FC<FilterProps> = ({ setFilters }) => {
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;
    setFilters((prev) => ({ ...prev, genre })); // Update genre filter
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const author = event.target.value;
    setFilters((prev) => ({ ...prev, author })); // Update author filter
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Genre:
        <select onChange={handleGenreChange} style={{ margin: '0 10px' }}>
          <option value="">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </label>
      <label>
        Author:
        <input
          type="text"
          onChange={handleAuthorChange}
          placeholder="Enter author name"
          style={{ marginLeft: '10px' }}
        />
      </label>
    </div>
  );
};


export { FilterBooks };
