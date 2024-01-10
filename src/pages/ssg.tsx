import Books from "@/components/books";
import books from "../../data/books.json";
import IBook from "@/types/i-book";
import { NextPage } from "next";

export interface IProps {
  books: IBook[];
}

export async function getStaticProps() {
  let props: IProps = {
    books,
  };

  return {
    props,
  };
}

const Ssg: NextPage<IProps> = ({ books }) => {
  return (
    <>
      <h2>Ssg</h2>
      <Books books={books} />
    </>
  );
};

export default Ssg;