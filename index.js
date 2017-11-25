function createPost(){

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate =  _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogPostArea = postTemplate({ 'title': title, 'body': body, 'author': author});
  var commentsArea = commentsTemplate();
  var postElement = document.getElementById('post');

  postElement.innerHTML = blogPostArea;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsArea;

}

function postComment(){
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;


  var commentsSection = document.getElementById("comments");

  commentsSection.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText});


}
