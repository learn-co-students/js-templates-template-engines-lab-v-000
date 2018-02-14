function createPost() {
  // create all the templates
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get values for blog post
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  // create the page template on the page
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // fill in the values
  var blogHTML = postTemplate({title: postTitle, body: postBody, author: postAuthor});
  var commentHTML = commentsTemplate();
  // find the post you just created
  var post = document.getElementById("post");
  // add the blog values to the post
  post.innerHTML = blogHTML;
  // add the comments at the end
  post.getElementsByTagName("footer")[0].innerHTML = commentHTML;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenterName").value;

  var comment = document.getElementById("comments");
  var newComment = commentTemplate({comment: commentText, commenter: commenterName});
  comment.innerHTML += newComment
}
