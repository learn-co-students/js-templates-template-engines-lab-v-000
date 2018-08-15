function createPost() {
  let pageTemplate = document.getElementById("page-template").innerHTML;
  let pageTemplateFn = _.template(pageTemplate);
  let postTemplate = document.getElementById("post-template").innerHTML;
  let postTemplateFn = _.template(postTemplate);
  let commentsTemplate = document.getElementById("comments-template").innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);

  let postTitle = document.getElementById("postTitle").value;
  let postBody = document.getElementById("postBody").value;
  let postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  let postSection = postTemplateFn({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});
  let commentsSection = commentsTemplateFn();
  let postElement = document.getElementById("post");
  
  postElement.innerHTML = postSection;
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;
}

function postComment() {
  let commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);

  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  let commentsSection = document.getElementById("comments");
  let newComment = commentTemplateFn({'comment': comment, 'commenter': commenter});

  commentsSection.innerHTML += newComment;
}