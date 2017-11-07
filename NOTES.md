<!-- Post form -->
<article>
  <form id="post-form" onsubmit="createPost();return false;">
    <label for="postTitle">Title:</label>
    <input type="text" id="postTitle"name="title"><br>
    <label for="postBody">Post:</label>
    <textarea id="postBody" name="post" rows="8" cols="80"></textarea><br>
    <label for="postAuthor">Author:</label>
    <input type="text" id="postAuthor" name="author" value=""><br>
    <input type="submit" value="Submit"><br></br>
  </form>
  <div id="posts"></div>
</article>

<!-- comment form -->
<article>
  <form id="comment-form" onsubmit="createPost();return false;">
    <label for="postTitle">Title:</label>
    <input type="text" id="postTitle"name="title"><br>
    <label for="postBody">Post:</label>
    <textarea id="postBody" name="post" rows="8" cols="80"></textarea><br>
    <label for="postAuthor">Author:</label>
    <input type="text" id="postAuthor" name="author" value=""><br>
    <input type="submit" value="Submit"><br></br>
  </form>
  <div id="posts"></div>

</article>

<!-- lodash regular chunck of HTML as our post-template -->
<script id="post-template" type="text/x-lodash-template">
<div class="post">
  <div class ="post-title"><%= title %>
    <div class="post-body"><%= post %></div>
    <div class="author">
      <p>
        <span class="posted-by">Posted By: </span>
        <% if (author !== '' ) { %>
        <%= author %>
        <% } else { %>
          Anonymous
          <% } %>
      </p>
    </div>
  </div>
</div>
</script>


index.js

// we need to create html structure
// we need to insert data into that structure

function createPost() {
  // page-template
  var author = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;
  var title = document.getElementById("postTitle").value;

  var postTemplate = document.getElementById("post-template").innerHTML;

  //create template function
  var templateFn = _.template(postTemplate);

  // create structure
  var postsArticle = document.getElementById("posts");

  // execute template function JSON object for the interpolatd values
  var templateHTML = templateFn({ 'post': post, 'author': author, 'title': title});

  postsArticle.innerHTML += templateHTML

}




index.js

// we need to create html structure
// we need to insert data into that structure

// createPost()
function createPost() {
  // create post variables
  var postTitle = document.getElementById("post-title").value;
  var postBody = document.getElementById("post-body").value;
  var postAuthor = document.getElementById("post-author").value;

  // create templates
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);



  // create post div
  var postDiv = document.getElementById("posts")
  var postTemplateHTML = postTemplate({'title': postTitle, 'post': postBody, 'author': postAuthor})

  postDiv.innerHTML += postTemplateHTML;

}

function postComment() {
  // create templates
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  // create comment variables
  var commentText = document.getElementById("comment-text").value;
  var commentAuthor = document.getElementById("comment-author").value;

  // creat comment div
  var commentDiv = document.getElementById("comments");
  debugger
  commentDiv.innerHTML += commentTemplate({'author': commentAuthor, 'comment': commentText});
}


index.html

<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript lodash Templates Lab</title>
  </head>
    <!-- add page-template to body for temaplate function -->
  <body>

    <main>
      <!-- page-template -->
      <script id="page-template" type="text/x-lodash-template">
        <div id="sidebar"></div>
        <div id="post"></div>
      </script>
    </main>
    <main>
      <!-- post-form -->
    <main>
      <form id="post-form" onsubmit="createPost();return false;">
        Title: <input id="post-title" type="text" name="title"><br>
        Post: <textarea id="post-body" name="post" rows="8" cols="80"></textarea><br>
        Author: <input id="post-author" type="text" name="" value=""><br>
        <input type="submit" value="Submit"><br>
      </form>
      <div id="posts"></div>
    </main>
      <!-- post-template -->
      <script id="post-template"type="text/x-lodash-template">
        <article>
          <header><h1><%= title %></h1></header>
          <p><%= post %></p>
          <footer><%= author %></footer>
        </article>
      </script>
    </main>
    <!-- comments-template -->
    <script id="comments-template"type="text/x-lodash-template">
      <div id="comments">
        <form onsubmit="postComment(); return false;">
          Name: <input id="comment-author" type="text" name="name"><br>
          Content: <input id="comment-text" type="text" name="text"><br>
          <input type="submit">
        </form>
      </div>
    </script>
    <!-- comment-template -->
    <script id="comment-template" type="text/x-lodash-template">
      <article>
        <p><%= comment %></p>
        <footer><%= author %></footer>
      </article>
    </script>





    <!-- lodash regular chunck of HTML as our template -->

    <!-- lodash and load index.js -->
    <script src="lodash.min.js"></script>
    <script src="node_modules/lodash/lodash.min.js"></script>
    <script src="index.js"></script>
    <!-- Open this file and call `mocha.run()` in console to run tests -->
    <div id="mocha"></div>
    <script src="node_modules/mocha/mocha.js"></script>
    <script src="node_modules/expect/umd/expect.min.js"></script>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script>mocha.setup('bdd');</script>
    <script src="test/index-test.js"></script>
  </body>
</html>
