import { Book } from "./types";

const books: Book[] = [
  {
    id: "1",
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    price: 34.99,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description: "Klasyka literatury rosyjskiej. Historia studenta Raskolnikowa, który popełnia morderstwo i zmaga się z wyrzutami sumienia.",
    genre: "Klasyka",
    year: 1866,
    pages: 672,
    isbn: "978-83-240-1234-5",
  },
  {
    id: "2",
    title: "Władca Pierścieni",
    author: "J.R.R. Tolkien",
    price: 89.99,
    coverUrl: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
    description: "Epicka saga fantasy o hobbicie Frodo Baggins, który musi zniszczyć Jedyny Pierścień, aby ocalić Śródziemie.",
    genre: "Fantasy",
    year: 1954,
    pages: 1216,
    isbn: "978-83-240-5678-9",
  },
  {
    id: "3",
    title: "Solaris",
    author: "Stanisław Lem",
    price: 29.99,
    coverUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
    description: "Filozoficzna powieść science fiction o kontakcie z obcą inteligencją na planecie Solaris.",
    genre: "Science Fiction",
    year: 1961,
    pages: 204,
    isbn: "978-83-240-9012-3",
  },
  {
    id: "4",
    title: "Duma i uprzedzenie",
    author: "Jane Austen",
    price: 27.99,
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    description: "Romantyczna powieść o Elizabeth Bennet i Fitzwilliamie Darcym, pełna humoru i społecznej obserwacji.",
    genre: "Romans",
    year: 1813,
    pages: 432,
    isbn: "978-83-240-3456-7",
  },
  {
    id: "5",
    title: "Wiedźmin: Ostatnie życzenie",
    author: "Andrzej Sapkowski",
    price: 32.99,
    coverUrl: "https://images.unsplash.com/photo-1535666669445-e8ac05d1b508?w=400&h=600&fit=crop",
    description: "Zbiór opowiadań o Geralcie z Rivii — wiedźminie, łowcy potworów w słowiańskim świecie fantasy.",
    genre: "Fantasy",
    year: 1993,
    pages: 332,
    isbn: "978-83-240-7890-1",
  },
  {
    id: "6",
    title: "1984",
    author: "George Orwell",
    price: 24.99,
    coverUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
    description: "Dystopijne arcydzieło o totalitarnym społeczeństwie pod rządami Wielkiego Brata.",
    genre: "Dystopia",
    year: 1949,
    pages: 328,
    isbn: "978-83-240-2345-6",
  },
  {
    id: "7",
    title: "Mały Książę",
    author: "Antoine de Saint-Exupéry",
    price: 19.99,
    coverUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    description: "Poetycka opowieść o małym chłopcu z asteroidy B-612, który uczy dorosłych o tym, co w życiu najważniejsze.",
    genre: "Baśń filozoficzna",
    year: 1943,
    pages: 96,
    isbn: "978-83-240-6789-0",
  },
  {
    id: "8",
    title: "Proces",
    author: "Franz Kafka",
    price: 28.99,
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    description: "Absurdalna opowieść o Józefie K., który zostaje aresztowany i osądzony bez podania przyczyny.",
    genre: "Klasyka",
    year: 1925,
    pages: 256,
    isbn: "978-83-240-4567-8",
  },
];

export function getAllBooks(): Book[] {
  return books;
}

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getGenres(): string[] {
  return [...new Set(books.map((b) => b.genre))];
}

export function getBooksByGenre(genre: string): Book[] {
  return books.filter((b) => b.genre === genre);
}

export function searchBooks(query: string): Book[] {
  const q = query.toLowerCase();
  return books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
  );
}
