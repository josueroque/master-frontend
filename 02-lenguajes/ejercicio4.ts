//Ejercicio 4

interface IBook {
  title: string;
  isRead: boolean;
}

function isBookRead(books: IBook[], titleToSearch: string): boolean {
  for (let item of books) {
    if (item.title === titleToSearch && item.isRead) return true;
  }
  return false;
}

const books: IBook[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
