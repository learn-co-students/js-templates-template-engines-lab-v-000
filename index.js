function createPost() {
  // set up templates
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  // get blog post data from form
  let postTitle = document.getElementById("postTitle").value;
  let postBody = document.getElementById("postBody").value;
  let postAuthor = document.getElementById("postAuthor").value;

  // append pageTemplate to main section of site
  let main = document.getElementsByTagName('main')[0].innerHTML;
  main += pageTemplate();

  // fill in pageTemplate() with blog post content
  let postDiv = document.getElementById("post")
  let postDetails = postTemplate({ 'title': postTitle, 'post': postBody, 'author': postAuthor})
  postDiv.innerHTML = postDetails

  // attach comments section to blog post
  let commentSection = commentsTemplate()
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentSection
}

function postComment() {
  let commenter = document.getElementById("commenter").value;
  let commentText = document.getElementById("commentText").value;

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  //create template function
  let commentsDiv = document.getElementById("comments");
  // same as append
  commentsDiv.innerHTML += commentTemplate({'commentText': commentText, 'commenter': commenter });
}
