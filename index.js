function createPost(){
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postContent = document.getElementById("postContent").value;
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let postDiv = document.getElementById("post");
  let postHTML = postTemplate({'postTitle': postTitle, 'postAuthor': postAuthor, 'postContent': postContent});

  postDiv.innerHTML += postHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("comment").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}
