

- Create a JavaScript file, and link it up
- Using JavaScript:



## The Book List

Keep track of which books you read and which books you want to read!

Copy this data into your JavaScript file:

```js
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
```

- In your JavaScript file:
  - Create an `h1` with the text of "My Book List", and put it inside `div.favoriteBooks`
  - Iterate through the array of books. For each book, create a `p` tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

### Bonus

- Remove the list bullet points from your lists
- Add the book cover image. For each book, add an `img` element for each book on the page
- Change the style of the book depending on whether you have read it or not (e.g. make the text color red if you have read it)

---

🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

---

# Creating Random Images

Start of with the following HTML:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>

  <div>
    <label>
      Width:
      <input type="number" class="width" />
    </label>
    <label>
      Height:
      <input type="number" class="height" />
    </label>
    <button id="randomize">Get random image!</button>
  </div>

  <div class="image"></div>

</body>

</html>
```

- Create and link a JavaScript file
- When someone clicks `button#randomize`:
  - Create an `img` element
  - Create a URL based on [this documentation](https://source.unsplash.com/)
    - e.g. It might look something like this: `https://source.unsplash.com/1600x900`

## Bonuses

### Bonus 1

Allow the user to select the width and the height!

### Bonus 2

Allow the user to select where their image comes from using a dropdown

Suggested options:

- [Picsum](https://picsum.photos/)
- [Fill Murray](http://www.fillmurray.com/)
- [Place Cage](http://www.placecage.com/)
- [Lorem Flickr](https://loremflickr.com/)
