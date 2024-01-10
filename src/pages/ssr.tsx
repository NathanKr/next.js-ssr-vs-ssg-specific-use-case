import Books from "@/components/books";
import books from "../../data/books.json";
import IBook from "@/types/i-book";
import { NextPage } from "next";

export interface IProps {
  books: IBook[];
}

export async function getServerSideProps() {
  let props: IProps = {
    books,
  };

  return {
    props,
  };
}

const Ssr: NextPage<IProps> = ({ books }) => {
  return (
    <>
      <h2>SSR</h2>
      <Books books={books} />
    </>
  );
};

export default Ssr;