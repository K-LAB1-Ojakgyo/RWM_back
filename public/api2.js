// please merge with api.js..

const getAllBook = async () => {
  const dbRef = firebase.database().ref("books");
  try {
    const snapshot = await dbRef.get();
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null; // or any default value you prefer
    }
  } catch (error) {
    console.error(error);
    throw error; // rethrow the error to handle it outside the function
  }
};

const getRandomBook = async (bookNum) => {
  books = await getAllBook();
  books_keys = Object.keys(books);
  console.log(books_keys);
  books_keys.sort(function () {
    return Math.round(Math.random()) - 0.5;
  });

  console.log(books_keys);
  book_list = {};
  for (let i = 0; i < bookNum; i++) {
    book_list[books_keys[i]] = books[books_keys[i]];
  }
  console.log(book_list);

  return book_list;
};
