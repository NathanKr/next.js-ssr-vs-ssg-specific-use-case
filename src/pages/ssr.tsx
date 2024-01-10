import Books from "@/components/books";
import books from "../../data/books.json";

export default function Ssr() {
  return (
    <>
      <h2>SSR</h2>
      <Books books={books} />
    </>
  );
}
