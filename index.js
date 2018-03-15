function createPost() {
  // setting up the page
  let pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  let postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let body = document.getElementById("body").value;

  document.getElementById("main").innerHTML += pageTemplateFn();

  let postHTML = postTemplateFn({ 'title': title, 'author': author, 'body': body });
  let commentsSection = commentsTemplateFn();
  let postSection = document.getElementById("post");

  postSection.innerHTML += postHTML;
  document.getElementsByTagName("footer")[0].innerHTML += commentsSection;
};

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}
