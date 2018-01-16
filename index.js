function postComment(comment) {
  // var bodyDiv = document.createElement("div");
  // var bodyPara = document.createElement("p");
  // bodyPara.innerHTML = comment;
  // bodyDiv.appendChild(bodyPara);
  //
  // return bodyDiv;
}

function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  //
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;
  //
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postInfo = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  var comments = commentsTemplate();
  var postNew = document.getElementById("post");
  postNew.innerHTML = postInfo;
  postNew.getElementsByTagName("footer")[0].innerHTML = comments;
}

function postComment() {
  debugger;
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentNew").value;
  //
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  //
  var commentInfo = commentTemplate({'commenter': commenter, 'comment':comment});
  var commentNew = document.getElementById("comments");
  commentNew.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment });
}
