import { useState, useMemo } from "react";
import { getAllBooks, getGenres, searchBooks } from "@/services/bookService";
import { Book } from "@/services/types";
import BookCard from "@/components/BookCard";
import BookDetail from "@/components/BookDetail";
import CartSheet from "@/components/CartSheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen } from "lucide-react";

const Index = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [query, setQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const allBooks = getAllBooks();
  const genres = getGenres();

  const filteredBooks = useMemo(() => {
    let result = query ? searchBooks(query) : allBooks;
    if (activeGenre) {
      result = result.filter((b) => b.genre === activeGenre);
    }
    return result;
  }, [query, activeGenre, allBooks]);

  if (selectedBook) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setSelectedBook(null)}
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold text-foreground">Księgarnia</span>
            </div>
            <CartSheet />
          </div>
        </header>
        <main className="container py-8">
          <BookDetail book={selectedBook} onBack={() => setSelectedBook(null)} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">Księgarnia</span>
          </div>
          <CartSheet />
        </div>
      </header>

      <main className="container py-8 space-y-8">
        {/* Hero */}
        <section className="text-center space-y-4 py-8">
          <h1 className="font-display text-5xl font-bold text-foreground">
            Odkryj swoją następną lekturę
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Przeglądaj naszą kolekcję klasyków i współczesnych bestsellerów.
          </p>
        </section>

        {/* Search & Filters */}
        <div className="space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Szukaj po tytule lub autorze..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={activeGenre === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setActiveGenre(null)}
            >
              Wszystkie
            </Badge>
            {genres.map((genre) => (
              <Badge
                key={genre}
                variant={activeGenre === genre ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>

        {/* Book Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nie znaleziono książek pasujących do wyszukiwania.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onSelect={setSelectedBook} />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Księgarnia. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
};

export default Index;
