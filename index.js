function createPost() {
  //grab form values
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  //create template string
  var pageTemplate = document.getElementById('page-template').innerHTML
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentTemplate = document.getElementById("comments-template").innerHTML
  // create template function
  var pageFn = _.template(pageTemplate);
  var templateFn = _.template(postTemplate);
  var commentFn = _.template(commentTemplate);

  var postsDiv = document.getElementById('post')

  // execute template function with JSON object for interpolated values
  var templateHTML = templateFn({'title': title, 'body': body, 'author': author});

  // append rather than replace!
  postsDiv.innerHTML += pageFn();
  postsDiv.innerHTML += templateHTML;
  postsDiv.innerHTML += commentFn();
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentBody").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({"comment": comment, "commenter": commenter})

  commentsDiv.innerHTML += templateHTML;
}