const bookInfo = {
    price: 24.99,
    title: 'Fifty Shades of Chicken',
    image: './assets/book.jpeg'
};

const getBook = () => {
    return bookInfo;
};


//you can oly return one thing. this file is going to return an object. inside that object we put what we are going to return. we want to export this book function.     
export default { getBook, }; 