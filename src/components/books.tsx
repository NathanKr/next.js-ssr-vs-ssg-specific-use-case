// components/Books.tsx
import styles from '@/styles/books.module.css'; // Import the CSS module
import IBook from '../types/i-book';
import { FC } from 'react';

interface Props {
  books: IBook[];
}

const Books: FC<Props> = ({ books }) => {
  return (
    <table className={styles.table}> 
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Number of Pages</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.numPages}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Books;
