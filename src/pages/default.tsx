import Books from "@/components/books";
import books from "../../data/books.json";

export default function Default() {
  return (
    <>
      <h2>Default</h2>
      <Books books={books} />
    </>
  );
}
