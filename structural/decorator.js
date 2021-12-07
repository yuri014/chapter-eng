const createBook = ({ name, author, sales, price }) => ({ name, author, sales, price });

const theStranger = createBook({
  name: 'theStranger',
  author: 'Albert Camus',
  sales: 1000,
  price: 30,
});

const createBestSeller = (book, discount) => {
  return {
    ...book,
    discount,
    priceWithDiscount: book.price - discount,
    bestSeller: true,
  };
};

const bestSeller = createBestSeller(theStranger, 5);
