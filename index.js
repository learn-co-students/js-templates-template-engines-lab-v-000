function createPost() {
  let postTitle = document.getElementById("postTitle").value;
  let postBody = document.getElementById("postBody").value;
  let postAuthor = document.getElementById("postAuthor").value;

  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let postDiv = document.getElementById("post");

  let postHTML = postTemplate({
    'postTitle': postTitle,
    'postBody': postBody,
    'postAuthor': postAuthor
  })

  postDiv.innerHTML += postHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();
}

function postComment() {
  let comment = document.getElementById("comment").value;
  let commenter = document.getElementById("commenter").value;

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commentHTML = commentTemplate({
    'comment': comment,
    'commenter': commenter
  });

  let commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += commentHTML;
}
