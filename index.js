function createPost() {
  // data for blog new blog post
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  // template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // add page template to main
  document.getElementById("page").innerHTML += pageTemplate();

  // create sectons on the page for different content
  var post = postTemplate({'title': title, 'body': body, 'author': author});
  // var comments
  var postElement = document.getElementById("post");
  var commentsSection = commentsTemplate();

  // add post to post element on page
  postElement.innerHTML = post;
  postElement.innerHTML += commentsSection;
}

function postComment() {
  // data for new comment
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  // template function
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  // get comments section and add new comment
  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({'comment': comment, 'commenter': commenter});
}
