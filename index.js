function createPost() {
  // template functions
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  var postTemplate = _.template(document.getElementById('post-template').innerHTML)
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)

  //get the values
  var postTitle = document.getElementById('postTitle');
  var postBody = document.getElementById('postBody');
  var postAuthor = document.getElementById('postAuthor');

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'post': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById('post');
  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}




function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("comment").value;

  
  var commentsDiv = document.getElementById("comments");
  var templateHTML = commentTemplate({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}
