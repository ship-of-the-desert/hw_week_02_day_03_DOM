var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];
  let book = document.createElement('div');
  book.setAttribute("class", "favoriteBooks");
  let booklist = document.createElement('h1');
  var textbook = document.createTextNode("My Book List");

  let bookTitleAuthor = document.createElement('p');
  var textbookTitleAuthor = document.innerHTML.createTextNode([books.title]+", by "+[books.author]);
  
  var append = document.querySelector('.append');
  append.appendChild(textbookTitleAuthor);