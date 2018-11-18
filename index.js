function createPost() {

  // blog values
  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let body = document.getElementById('body').value


  let pageTemplateElement = document.getElementById("page-template").innerHTML
  let postTemplateElement = document.getElementById("post-template").innerHTML
  let commentsTemplateElement = document.getElementById("comments-template").innerHTML

  let pageTemplate = _.template(pageTemplateElement)
  let postTemplate = _.template(postTemplateElement);
  let commentsTemplate = _.template(commentsTemplateElement);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {

  // comment values
  let commentText = document.getElementById("commentText").value;
  let commentAuthor = document.getElementById("commentAuthor").value;

  let commentTemplateElement = document.getElementById("comment-template").innerHTML

  let commentTemplate = _.template(commentTemplateElement);

  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commentAuthor': commentAuthor, 'commentText': commentText });
}
