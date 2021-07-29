const http = new easyHTTP();

//get Posts
http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// get a single Post
http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//create post and data to send
//data
const data = {
  title: "Custom Post",
  body: "This is Julie's custom post.",
};

//new post
http.post(
  "https://jsonplaceholder.typicode.com/posts",
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

//PUT an update to a post
const data1 = {
  title: "Custom Post",
  body: "This is an update to a post.",
};

http.put(
  "https://jsonplaceholder.typicode.com/posts/100",
  data1,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);
