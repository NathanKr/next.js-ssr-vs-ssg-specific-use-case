import Books from "@/components/books";
import books from "../../data/books.json";

export default function Ssg() {
  return (
    <>
      <h2>SSG</h2>
      <Books books={books} />
    </>
  );
}
