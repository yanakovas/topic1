// Задача 1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((res) => res.json())
  .then((data) => {
    const evenComments = data.filter((comment) => comment.id % 2 === 0);
    console.log(evenComments);
  });

// Задача 2
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((res) => res.json())
  .then((data) => {
    const photos = data.filter((photo) => photo.title.startsWith('a'));
    console.log(photos);
  });

// Задача 3
fetch('https://jsonplaceholder.typicode.com/users/1/albums')
  .then((res) => res.json())
  .then((data) => {
    const albums = data.filter((album) => album.id > 5);
    console.log(albums);
  });
