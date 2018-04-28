function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;
  
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
  
  document.getElementsByTagName('main')[0].innerHTML += pageTemplate;
  
  let postSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById('post');
  
  postElement.innerHTML = postSection;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;
}

function postComment() {
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;
 
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commentsSection = document.getElementById("comments");

  commentsSection.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': commentText});
}