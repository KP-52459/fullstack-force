import { Link } from "react-router-dom";
import { Book } from "@/services/types";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";

interface HomeSectionProps {
  kicker: string;
  title: string;
  books: Book[];
  onSelect: (book: Book) => void;
}

const HomeSection = ({ kicker, title, books, onSelect }: HomeSectionProps) => {
  return (
    <section className="py-20 border-b border-border">
      <div className="container">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {kicker}
            </p>
            <h2 className="font-display font-normal leading-[1.05] tracking-[-0.02em] text-foreground text-[clamp(32px,3.2vw,48px)]">
              {title}
            </h2>
          </div>
          <Link to="/katalog">
            <Button variant="ghost" size="sm">
              Zobacz wszystkie
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
