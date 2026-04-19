import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";
import CartSheet from "@/components/CartSheet";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">Księgarnia</span>
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <Link
            to="/katalog"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              pathname === "/katalog" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Katalog
          </Link>
        </nav>

        <CartSheet />
      </div>
    </header>
  );
};

export default Navbar;
