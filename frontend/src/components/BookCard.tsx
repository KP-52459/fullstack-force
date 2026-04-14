import { Book } from "@/services/types";
import { addToCart } from "@/services/cartService";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
}

const BookCard = ({ book, onSelect }: BookCardProps) => {
  return (
    <div
      className="group cursor-pointer rounded-lg border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
      onClick={() => onSelect(book)}
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {book.genre}
        </p>
        <h3 className="font-display text-lg font-semibold leading-tight text-card-foreground">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-xl font-bold text-primary">
            {book.price.toFixed(2)} zł
          </span>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(book);
            }}
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            Dodaj
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
