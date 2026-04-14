export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  description: string;
  genre: string;
  year: number;
  pages: number;
  isbn: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}
