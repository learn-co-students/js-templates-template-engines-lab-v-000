function createPost() {
  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postContent").value;
  let author = document.getElementById("postAuthor").value;

  let pageTemplate = document.getElementById("page-template").innerHTML;
  let pageTemplateFn = _.template(pageTemplate);

  let postTemplate = document.getElementById("post-template").innerHTML;
  let postTemplateFn = _.template(postTemplate);

  let commentsTemplate = document.getElementById("comments-template").innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  let postHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });
  let commentsHTML = commentsTemplateFn();
  let postElement = document.getElementById("post");

  postElement.innerHTML = postHTML;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsHTML;
}

function postComment(){
  let comment = document.getElementById('commentText').value;
  let commenter = document.getElementById('commenterName').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let commentTemplateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  let commentTemplateHTML = commentTemplateFn({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += commentTemplateHTML;
}
