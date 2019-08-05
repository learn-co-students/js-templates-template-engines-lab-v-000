function createPost() {
  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate);
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  let pageDiv = document.getElementById('page');
  pageDiv.innerHTML += pageTemplateFn();

  let postTemplateHTML = postTemplateFn({'title': title, 'body': body, 'author': author});
  let postElement = document.getElementById("post");
  postElement.innerHTML = postTemplateHTML;

  let commentsSection = commentsTemplate();
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;



}

function postComment() {

  let commenterName = document.getElementById('commenterName').value;
  let commentText = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById("comment-template").innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById("comments");
  let templateHTML = templateFn({ 'commenterName': commenterName, 'commentText': commentText });
  commentsDiv.innerHTML += templateHTML;

}
