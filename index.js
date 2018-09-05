function createPost() {
  var postName = document.getElementById("post-name").value;
  var postContent = document.getElementById("post-content").value;
  var poster = document.getElementById("poster").value;

  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postHTML = postTemplate({'title': postName, 'body': postContent, 'poster': poster});

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  var postElement = document.getElementById("post");
  postElement.innerHTML += postHTML;

}

function postComment() {
  var commenter = document.getElementById(".comments-template .comments-form .commenter").value
  var comment = document.getElementById(".comments-template .comments-form .comment").value

  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  var commentHTML = commentTemplate({"commenter": commenter, "comment": comment})

  commentElement = document.getElementById("comments")
  commentElement += commentHTML
}
