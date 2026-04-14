import { useCart } from "@/hooks/useCart";
import { removeFromCart, updateQuantity, clearCart } from "@/services/cartService";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CartSheet = () => {
  const { cart, count, total } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative gap-2">
          <ShoppingCart className="h-5 w-5" />
          Koszyk
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {count}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Koszyk</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-muted-foreground">Koszyk jest pusty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto py-4">
              {cart.map((item) => (
                <div key={item.book.id} className="flex gap-3">
                  <img
                    src={item.book.coverUrl}
                    alt={item.book.title}
                    className="h-20 w-14 rounded object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className="font-display text-sm font-semibold leading-tight">
                      {item.book.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{item.book.author}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 ml-auto text-destructive"
                        onClick={() => removeFromCart(item.book.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">
                    {(item.book.price * item.quantity).toFixed(2)} zł
                  </span>
                </div>
              ))}
            </div>

            <Separator />
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">Suma</span>
                <span className="font-display text-2xl font-bold text-primary">
                  {total.toFixed(2)} zł
                </span>
              </div>
              <Button className="w-full" size="lg">
                Zamów
              </Button>
              <Button variant="ghost" className="w-full" onClick={clearCart}>
                Wyczyść koszyk
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
