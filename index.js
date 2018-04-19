function createPost() {
  var main = document.getElementsByTagName("main")[0];
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  // // var authorName = document.getElementById("author-name").value;
  // // var articleTitle = document.getElementById("article-title").value;
  // // var articleBody = document.getElementById("article-body").value;
  // var post = postTemplate({title: articleTitle, text: articleBody, author: authorName});
  // var page = pageTemplate({post: post, comments: document.getElementById("comments-template").innerHTML});
  // main.innerHTML = page;
}

function postComment() {
  // var comments = document.getElementById("comments");
  // var name = document.getElementById("commenter-name").value;
  // var comment = document.getElementById("comment-body").value;
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  // comments.innerHTML += commentTemplate({commentBody: comment, commenterName: name});
}
